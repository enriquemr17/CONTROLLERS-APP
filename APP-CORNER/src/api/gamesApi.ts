import type { CreateGameInput, Game } from "../types/game";

export async function searchGames(query: string) {
  const res = await fetch(
    `https://api.rawg.io/api/games?search=${query}&key=a66dd6a48a4547158ab02855f1b6bba6`
  );

  return res.json();
}

export async function getBackendGames() {
  const res = await fetch("https://controllers-app.onrender.com/api/games");
  return res.json();
}

export async function addGame(game: CreateGameInput) {
  const res = await fetch("https://controllers-app.onrender.com/api/games", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(game),
  });

  return res.json();
}

export async function updateGame(id: string, data: Partial<Game>) {
  const res = await fetch(`https://controllers-app.onrender.com/api/games/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error al actualizar el juego")
  return res.json();
}

export async function deleteGame(id: string) {
  const res = await fetch(`https://controllers-app.onrender.com/api/games/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Error al eliminar el juego")
  return res.json();
}

export async function getMejorValorados (plataforma?: string) {
  const plataformParam = plataforma ? `&plataforms=${plataforma}`: ""
  const res = await fetch (
    `https://api.rawg.io/api/games?ordering=-rating&key=a66dd6a48a4547158ab02855f1b6bba6`
  )
  return res.json()
}

export async function getMasJugados (plataforma?: string) {
  const plataformParam = plataforma ? `&plataforms=${plataforma}`: ""
  const res = await fetch (
    `https://api.rawg.io/api/games?ordering=-added&key=a66dd6a48a4547158ab02855f1b6bba6`
  )
  return res.json()
}

export async function getNuevosLanzamientos (plataforma?: string) {
  const plataformParam = plataforma ? `&plataforms=${plataforma}`: ""
  const res = await fetch (
    `https://api.rawg.io/api/games?ordering=-released&dates=2025-01-01,2026-05-24&key=a66dd6a48a4547158ab02855f1b6bba6`
  )
  return res.json()
}

export async function getProximosLanzamientos (plataforma?: string) {
  const plataformParam = plataforma ? `&plataforms=${plataforma}`: ""
  const res = await fetch (
        `https://api.rawg.io/api/games?dates=2026-05-25,2027-01-01&ordering=-added&key=a66dd6a48a4547158ab02855f1b6bba6`
  )
  return res.json()
}