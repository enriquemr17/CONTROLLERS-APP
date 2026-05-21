import type { GameStatus } from "../types/game"
export type Estado = GameStatus

interface StatusBadgeProps {
  estado: Estado
}

function StatusBadge({ estado }: StatusBadgeProps) {
  const colores: Record<Estado, string> = {
    pending: "bg-yellow-900 text-yellow-300 px-3 py-1 rounded-full text-xs font-medium border border-yellow-700",
    playing: "bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-700",
    completed: "bg-green-900 text-green-300 px-3 py-1 rounded-full text-xs font-medium border border-green-700",
    abandoned: "bg-red-900 text-red-300 px-3 py-1 rounded-full text-xs font-medium border border-red-700",
    wishlist: "bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-xs font-medium border border-purple-700"
  }

  return (
    <span className={colores[estado]}>
      {estado}
    </span>
  )
}

export default StatusBadge
    
