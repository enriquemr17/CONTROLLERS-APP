import { useState } from "react"
import { searchGames, addGame } from "../api/gamesApi"

function HomePage() {
  const [query, setQuery] = useState("")
  const [games, setGames] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  async function handleSearch() {
    if (!query.trim()) return
    try {
      setLoading(true)
      const data = await searchGames(query)
      setGames(data.results)
    } catch (error) {
      console.error("Error buscando juegos", error)
    } finally {
      setLoading(false)
    }
  }

  async function handleAddGame(game: any) {
    try {
      await addGame({
        title: game.name,
        platform: game.platforms?.[0]?.platform?.name || "Unknown",
        status: "pending",
        portada: game.background_image,
        hoursPlayed: 0
      })
      alert("¡Juego añadido a tu colección!")
    } catch (error) {
      console.error("Error añadiendo juego", error)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-8 py-8">
      <p className="text-xs font-medium text-purple-400 tracking-widest uppercase mb-1">// Explorar</p>
      <h1 className="text-2xl font-semibold text-white mb-6">Encuentra tu próximo juego</h1>

      <div className="flex gap-3 mb-8">
        <input
          className="flex-1 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500"
          style={{ backgroundColor: '#111120' }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Buscar juego..."
        />
        <button
          className="bg-purple-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
          onClick={handleSearch}
        >
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </div>

      {games.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {games.map((game: any) => (
            <div key={game.id} className="rounded-xl border border-gray-800 overflow-hidden hover:border-purple-500 transition-colors" style={{ backgroundColor: '#111120' }}>
              <div className="relative">
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="w-full h-36 object-cover"
                />
                <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-purple-300 text-xs px-2 py-0.5 rounded border border-purple-800 font-medium">
                  {game.platforms?.[0]?.platform?.name || "Unknown"}
                </div>
                {game.rating > 0 && (
                  <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-yellow-400 text-xs px-2 py-0.5 rounded font-medium">
                    ★ {game.rating.toFixed(1)}
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-sm text-white mb-1 truncate">{game.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{game.genres?.[0]?.name || ""}</p>
                <button
                  className="w-full text-xs py-1.5 rounded-lg border border-purple-700 text-purple-400 hover:bg-purple-900 transition-colors font-medium"
                  onClick={() => handleAddGame(game)}
                >
                  + Añadir a colección
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {games.length === 0 && !loading && (
        <div className="text-center py-20 text-gray-600">
          <p className="text-4xl mb-4">🎮</p>
          <p className="text-sm">Busca un juego para empezar</p>
        </div>
      )}
    </div>
  )
}

export default HomePage