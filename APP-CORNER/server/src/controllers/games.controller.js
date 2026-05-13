import * as service from "../services/games.service.js";

// GET ALL
export const getGames = (req, res) => {
  res.status(200).json(service.getAllGames());
};

// GET BY ID
export const getGameById = (req, res) => {
  const game = service.getGameById(req.params.id);

  if (!game) {
    return res.status(404).json({ message: "Juego no encontrado" });
  }

  res.status(200).json(game);
};

// CREATE
export const createGame = (req, res) => {
  const { title, platform } = req.body;

  if (!title || !platform) {
    return res.status(400).json({ message: "title y platform son obligatorios" });
  }

  const newGame = service.createGame(req.body);

  res.status(201).json(newGame);
};

// UPDATE (PUT)
export const updateGame = (req, res) => {
  const updated = service.updateGame(req.params.id, req.body);

  if (!updated) {
    return res.status(404).json({ message: "Juego no encontrado" });
  }

  res.status(200).json(updated);
};

// DELETE
export const deleteGame = (req, res) => {
  const deleted = service.deleteGame(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: "Juego no encontrado" });
  }

  res.status(200).json({ message: "Juego eliminado" });
};