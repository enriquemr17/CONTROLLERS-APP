import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import { getBackendGames, deleteGame, updateGame } from "../api/gamesApi";
import type { Game } from "../types/game";

function CollectionPage() {
  const [games, setGames] = useState<any[]>([]);

  async function loadGames() {
    const data = await getBackendGames();
    setGames(data);
  }

  useEffect(() => {
    loadGames();
  }, []);

  async function handleDelete(id: string) {
    await deleteGame(id);
    loadGames(); // refresca lista
  }

  async function handleEdit(id: string) {
    const newStatus = prompt("Nuevo estado (playing/completed/pending)");
    const newHours = prompt("Horas jugadas");

    if (!newStatus || !newHours) return;

    await updateGame(id, {
      status: newStatus,
      horasJugadas: Number(newHours),
    });

    loadGames();
  }

  return (
    <div className="flex flex-wrap gap-4">
      {games.map((game) => (
        <GameCard
          key={game.id}
          id={game.id}
          title={game.title}
          platform={game.platform}
          status={game.status}
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