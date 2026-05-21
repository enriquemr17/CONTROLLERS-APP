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
    <div className="rounded-xl border border-gray-800 overflow-hidden hover:border-purple-500 transition-colors" style={{ backgroundColor: '#111120' }}>
      <div className="relative">
        {portada
          ? <img src={portada} alt={title} className="w-full h-36 object-cover" />
          : <div className="w-full h-36 flex items-center justify-center" style={{ backgroundColor: '#1a0a2e' }}>
              <span className="text-4xl opacity-40">🎮</span>
            </div>
        }
        <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-purple-300 text-xs px-2 py-0.5 rounded border border-purple-800 font-medium">
          {platform}
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-sm text-white mb-1 truncate">{title}</h3>
        <div className="flex items-center justify-between mb-3">
          <StatusBadge estado={status} />
          <span className="text-xs text-gray-500">{hoursPlayed}h</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(id)}
            className="flex-1 text-xs py-1 rounded border border-purple-700 text-purple-400 hover:bg-purple-900 transition-colors"
          >
            Editar
          </button>
          <button
            onClick={() => onDelete(id)}
            className="flex-1 text-xs py-1 rounded border border-red-900 text-red-400 hover:bg-red-950 transition-colors"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameCard