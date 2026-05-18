import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import { getBackendGames, deleteGame, updateGame } from "../api/gamesApi";
import { Game, GameStatus } from "../types/game";
function CollectionPage() {
  const [games, setGames] = useState<any[]>([]);
  const [cargando, setCargando] = useState (true); 
  const [error, setError] = useState<String | null> (null)
  
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
    try {
       const newStatus = prompt("Nuevo estado (playing/completed/pending)");
      const newHours = prompt("Horas jugadas");

      if (!newStatus || !newHours) return;
    
    await updateGame(id, {
      status: newStatus,
      horasJugadas: Number(newHours),
    });
      loadGames ()
    } catch (err) {
      setError ("Error al editar el juego")
    }
  }
  
  if (cargando) return <p>Cargando...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="flex flex-wrap gap-4">
      {games.map((game) => (
        <GameCard
          key={game.id}
          id={game.id}
          title={game.title}
          platform={game.platform}
          status={game.status as GameStatus}
          portada={game.portada}
          horasJugadas={game.horasJugadas}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default CollectionPage;