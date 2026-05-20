import type { Game, CreateGameInput } from "../types/game";


export async function addGame(game: CreateGameInput) {
  const response = await fetch("https://controllers-app.onrender.com/api/games", {
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

export async function getBackendGames () {
  const res = await fetch ("https://controllers-app.onrender.com/api/games")
  if (!res.ok) {
    throw new Error ("Error al obtener los juegos")
  }
  
  return res.json(); 

  
}

export async function updateGame (id: string, data: Partial<Game>) {
  const res = await fetch (`https://controllers-app.onrender.com/api/games/${id}`, {
    method: "PUT", 
    headers : {
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify(data),
  }); 
  if (!res.ok) {
    throw new Error ("Error al actualizar los juegos")
  }

  return res.json(); 
}

export async function deleteGame (id: string) {
  const res = await fetch (`https://controllers-app.onrender.com/api/games/${id}`, {
    method: "DELETE",
  }); 
if (!res.ok) {
  throw new Error ("Error al eliminar el juego")
}
return res.json(); 
}