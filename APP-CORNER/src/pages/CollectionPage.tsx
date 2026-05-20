import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import { getBackendGames, deleteGame, updateGame } from "../api/gamesApi";
import type { Game, GameStatus } from "../types/game";
import FilterBar from "../components/FilterBar"; 
import EditGameModal from "../components/EditGameModal";
import { id } from "date-fns/locale";

function CollectionPage() {
  const [games, setGames] = useState<any[]>([]);
  const [cargando, setCargando] = useState (true); 
  const [error, setError] = useState<String | null> (null)
  const [filtro, setFiltro] = useState <GameStatus | null> (null)
  const [juegoEditando, setJuegoEditando] = useState <Game | null> (null)
  
  async function loadGames() {
    try {
      setCargando(true)
      const data =  await getBackendGames ()
      setGames(data)
    } catch (err) {
      setError ("Error al cargar los juegos")
    } finally {
      setCargando (false)
    }
    
  }

  useEffect(() => {
    loadGames();
  }, []);
   
  

  async function handleDelete(id: string) {
    try {
    await deleteGame(id);
    loadGames() // refresca lista
    } catch (err) {
      setError ("Error al eliminar el juego")
    }
  }

  async function handleEdit(id: string) {
    const game = games.find (g => g.id === id)
    setJuegoEditando (game || null) 
  }

  async function handleSave (id: string, status: GameStatus, hoursPlayed: number) {
    try {
      await updateGame (id, { status, hoursPlayed})
      loadGames ()
      setJuegoEditando (null)
    } catch (err) {
      setError ("Error al editar el juego")
    }
  }
  
  if (cargando) return <p>Cargando...</p>
  if (error) return <p>{error}</p>
  

  return (
    <div>
      <FilterBar value = {filtro} onChange = {setFiltro} />
    
    <div className="flex flex-wrap gap-4">
      {games.map((game) => (
        <GameCard
          key={game.id}
          id={game.id}
          title={game.title}
          platform={game.platform}
          status={game.status as GameStatus}
          portada={game.portada}
          hoursPlayed={game.hoursPlayed}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}

      <EditGameModal
        isOpen = {juegoEditando !== null}
        game = {juegoEditando}
        onSave = {handleSave}
        onClose = {() => setJuegoEditando(null)}
      />
    </div>
    </div>
  );
}

export default CollectionPage;