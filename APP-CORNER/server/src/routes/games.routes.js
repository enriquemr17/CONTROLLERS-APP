import express from "express";
import {
  getGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame
} from "../controllers/games.controller.js";
import * as controller from "../controllers/games.controller.js";

const router = express.Router();

// GET
router.get("/", getGames);
router.get("/:id", getGameById);

// POST
router.post("/", createGame);

// PUT
router.put("/:id", updateGame);

// DELETE
router.delete("/:id", deleteGame);

export default router;