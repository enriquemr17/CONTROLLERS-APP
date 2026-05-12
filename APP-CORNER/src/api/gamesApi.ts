export async function searchGames(query: string) {
  const res = await fetch(
    `https://api.rawg.io/api/games?search=${query}&key=a66dd6a48a4547158ab02855f1b6bba6`
  );

  const data = await res.json();
  return data;
}