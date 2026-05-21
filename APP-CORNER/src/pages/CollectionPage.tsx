import { useEffect, useState } from "react"
import GameCard from "../components/GameCard"
import { getBackendGames, deleteGame, updateGame } from "../api/gamesApi"
import type { Game, GameStatus } from "../types/game"
import FilterBar from "../components/FilterBar"
import EditGameModal from "../components/EditGameModal"

function CollectionPage() {
  const [games, setGames] = useState<Game[]>([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filtro, setFiltro] = useState<GameStatus | null>(null)
  const [juegoEditando, setJuegoEditando] = useState<Game | null>(null)

  async function loadGames() {
    try {
      setCargando(true)
      const data = await getBackendGames()
      setGames(data)
    } catch (err) {
      setError("Error al cargar los juegos")
    } finally {
      setCargando(false)
    }
  }

  useEffect(() => { loadGames() }, [])

  async function handleDelete(id: string) {
    try {
      await deleteGame(id)
      loadGames()
    } catch (err) {
      setError("Error al eliminar el juego")
    }
  }

  async function handleEdit(id: string) {
    const game = games.find(g => g.id === id)
    setJuegoEditando(game || null)
  }

  async function handleSave(id: string, status: GameStatus, hoursPlayed: number) {
    try {
      await updateGame(id, { status, hoursPlayed })
      loadGames()
      setJuegoEditando(null)
    } catch (err) {
      setError("Error al editar el juego")
    }
  }

  const juegosFiltrados = filtro ? games.filter(g => g.status === filtro) : games

  if (cargando) return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-purple-400 text-sm">Cargando colección...</p>
    </div>
  )

  if (error) return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-red-400 text-sm">{error}</p>
    </div>
  )

  return (
    <div className="max-w-6xl mx-auto px-8 py-8">
      <p className="text-xs font-medium text-purple-400 tracking-widest uppercase mb-1">// Mi colección</p>
      <h1 className="text-2xl font-semibold text-white mb-2">Tu biblioteca</h1>
      <p className="text-sm text-gray-500 mb-6">{games.length} juegos en tu colección</p>

      <div className="mb-6">
        <FilterBar value={filtro} onChange={setFiltro} />
      </div>

      {juegosFiltrados.length === 0 ? (
        <div className="text-center py-20 text-gray-600">
          <p className="text-4xl mb-4">🎮</p>
          <p className="text-sm">No hay juegos en esta categoría</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {juegosFiltrados.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              title={game.title}
              platform={game.platform || "Unknown"}
              status={game.status as GameStatus}
              portada={game.portada}
              hoursPlayed={game.hoursPlayed}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      )}

      <EditGameModal
        isOpen={juegoEditando !== null}
        game={juegoEditando}
        onSave={handleSave}
        onClose={() => setJuegoEditando(null)}
      />
    </div>
  )
}

export default CollectionPage