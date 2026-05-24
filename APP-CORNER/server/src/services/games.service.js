import { Game } from '../models/game.model.js'

export const getAllGames = async () => {
  return await Game.find()
}

export const getGameById = async (id) => {
  return await Game.findById(id)
}

export const createGame = async (data) => {
  const game = new Game(data)
  return await game.save()
}

export const updateGame = async (id, data) => {
  return await Game.findByIdAndUpdate(id, data, { new: true })
}

export const deleteGame = async (id) => {
  return await Game.findByIdAndDelete(id)
}