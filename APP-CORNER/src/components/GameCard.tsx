import StatusBadge, { type Estado } from "./StatusBadge"

interface GameCardProps {
  id: string
  title: string
  platform: string
  status: Estado
  portada?: string
  hoursPlayed?: number
  onDelete: (id: string) => void
  onEdit: (id: string) => void
}

function GameCard({ id, title, platform, status, portada, hoursPlayed, onDelete, onEdit }: GameCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden w-56">
      <div className="h-36 bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center relative">
        {portada
          ? <img src={portada} alt={title} className="w-full h-full object-cover" />
          : <span className="text-4xl opacity-40">🎮</span>
        }
        <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white text-xs px-2 py-0.5 rounded font-medium">
          {platform}
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-sm text-gray-900 mb-1 truncate">{title}</h3>
        <div className="flex items-center justify-between mb-2">
          <StatusBadge estado={status} />
          <span className="text-xs text-gray-400">{hoursPlayed}h</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(id)}
            className="flex-1 text-xs py-1 rounded border border-purple-200 text-purple-600 hover:bg-purple-50 transition-colors"
          >
            Editar
          </button>
          <button
            onClick={() => onDelete(id)}
            className="flex-1 text-xs py-1 rounded border border-red-200 text-red-500 hover:bg-red-50 transition-colors"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameCard