import type { CreateGameInput } from "../types/game";


export async function addGame(game: CreateGameInput) {
  const response = await fetch("http://localhost:3001/api/games", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(game)
  });

  if (!response.ok) {
    throw new Error("Error al añadir juego");
  }

  return response.json();
}

