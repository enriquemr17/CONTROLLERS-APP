export type GameStatus = "pending" | "playing" | "completed" | "abandoned" | "whishlist"

export interface Game {
    id: string
    title: string
    status: GameStatus
// OPCIONALES
    platform?: string
    hoursPlayed?: number
    portada?: string
}

export type CreateGameInput = {
  title: string
  status: GameStatus
  platform?: string
  hoursPlayed?: number
  portada?: string
}