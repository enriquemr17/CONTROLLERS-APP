export async function searchGames(query: string) {
  const res = await fetch(
    `https://api.rawg.io/api/games?search=${query}&key=a66dd6a48a4547158ab02855f1b6bba6`
  );

  return res.json();
}

export async function getBackendGames() {
  const res = await fetch("http://localhost:3001/api/games");
  return res.json();
}

export async function addGame(game: any) {
  const res = await fetch("http://localhost:3001/api/games", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(game),
  });

  return res.json();
}

export async function updateGame(id: string, data: any) {
  const res = await fetch(`http://localhost:3001/api/games/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

export async function deleteGame(id: string) {
  const res = await fetch(`http://localhost:3001/api/games/${id}`, {
    method: "DELETE",
  });

  return res.json();
}