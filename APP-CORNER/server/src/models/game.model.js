import mongoose from 'mongoose'

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  platform: { type: String, default: 'Unknown' },
  status: { type: String, default: 'pending' },
  portada: { type: String, default: '' },
  hoursPlayed: { type: Number, default: 0 }
}, { timestamps: true })

export const Game = mongoose.model('Game', gameSchema)