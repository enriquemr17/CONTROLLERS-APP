let games = [];

export const getAllGames = () => {
  return games;
};

export const getGameById = (id) => {
  return games.find((g) => g.id == id);
};

export const createGame = (data) => {
  const newGame = {
    id: Date.now(),
    title: data.title,
    platform: data.platform,
    status: data.status || "pending",
    portada: data.portada || "",
    horasJugadas: data.horasJugadas || 0
  };

  games.push(newGame);
  return newGame;
};

export const updateGame = (id, data) => {
  const index = games.findIndex((g) => g.id == id);

  if (index === -1) return null;

  games[index] = {
    ...games[index],
    ...data
  };

  return games[index];
};

export const deleteGame = (id) => {
  const index = games.findIndex((g) => g.id == id);

  if (index === -1) return false;

  games.splice(index, 1);
  return true;
};