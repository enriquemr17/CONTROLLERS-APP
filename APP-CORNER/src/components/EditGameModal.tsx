import { useState } from "react"
import type { Game, GameStatus } from "../types/game"

interface EditGameModalProps {
  isOpen: boolean
  game: Game | null
  onSave: (id: string, status: GameStatus, hoursPlayed: number) => void
  onClose: () => void
}

function EditGameModal({ isOpen, game, onSave, onClose }: EditGameModalProps) {
  const [status, setStatus] = useState<GameStatus>(game?.status || "pending")
  const [hoursPlayed, setHoursPlayed] = useState<number>(game?.hoursPlayed || 0)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="rounded-xl border border-gray-700 p-6 w-80" style={{ backgroundColor: '#111120' }}>
        <h2 className="text-white font-semibold mb-4">Editar juego</h2>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as GameStatus)}
              className="mt-1 w-full border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
              style={{ backgroundColor: '#0f0f1a' }}
            >
              <option value="pending">Pendiente</option>
              <option value="playing">Jugando</option>
              <option value="completed">Completado</option>
              <option value="abandoned">Abandonado</option>
              <option value="wishlist">Lista de deseos</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Horas jugadas</label>
            <input
              type="number"
              value={hoursPlayed}
              onChange={(e) => setHoursPlayed(Number(e.target.value))}
              className="mt-1 w-full border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
              style={{ backgroundColor: '#0f0f1a' }}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => onSave(game!.id, status, hoursPlayed)}
              className="flex-1 bg-purple-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
            >
              Guardar
            </button>
            <button
              onClick={onClose}
              className="flex-1 border border-gray-700 text-gray-400 py-2 rounded-lg text-sm font-medium hover:border-gray-500 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditGameModal