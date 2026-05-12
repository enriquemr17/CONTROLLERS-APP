export type GameStatus = "pending" | "playing" | "completed" | "abandoned" | "whishlist"

export interface Game {
    id: string
    title: string
    status: GameStatus
// OPCIONALES
    platform?: string
    hoursPlayed?: number
}

export type CreateGameInput = Omit<Game, "id"> // Añadir juego sin ID para usuario
