import * as service from '../services/games.service.js'

export const getGames = async (req, res) => {
  try {
    const games = await service.getAllGames()
    res.status(200).json(games)
  } catch {
    res.status(500).json({ message: 'Error del servidor' })
  }
}

export const getGameById = async (req, res) => {
  try {
    const game = await service.getGameById(req.params.id)
    if (!game) return res.status(404).json({ message: 'Juego no encontrado' })
    res.status(200).json(game)
  } catch {
    res.status(500).json({ message: 'Error del servidor' })
  }
}

export const createGame = async (req, res) => {
  try {
    const { title, platform } = req.body
    if (!title || !platform) return res.status(400).json({ message: 'title y platform son obligatorios' })
    const game = await service.createGame(req.body)
    res.status(201).json(game)
  } catch (error){
    console.error ('Error createGame:', error)
    res.status(500).json({ message: 'Error del servidor' })
  }
}

export const updateGame = async (req, res) => {
  try {
    const updated = await service.updateGame(req.params.id, req.body)
    if (!updated) return res.status(404).json({ message: 'Juego no encontrado' })
    res.status(200).json(updated)
  } catch {
    res.status(500).json({ message: 'Error del servidor' })
  }
}

export const deleteGame = async (req, res) => {
  try {
    const deleted = await service.deleteGame(req.params.id)
    if (!deleted) return res.status(404).json({ message: 'Juego no encontrado' })
    res.status(200).json({ message: 'Juego eliminado' })
  } catch {
    res.status(500).json({ message: 'Error del servidor' })
  }
}