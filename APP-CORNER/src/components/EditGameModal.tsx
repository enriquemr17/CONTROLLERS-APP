import { useState } from "react"
import type { Game, GameStatus } from "../types/game"


interface EditGameModalProps {
  isOpen: boolean
  game: Game | null
  onSave: (id: string, status: GameStatus, hoursPlayed: number, platform: string) => void
  onClose: () => void
}

function EditGameModal({ isOpen, game, onSave, onClose }: EditGameModalProps) {
  const [status, setStatus] = useState<GameStatus>(game?.status || "pending")
  const [hoursPlayed, setHoursPlayed] = useState<number>(game?.hoursPlayed || 0)
  const [platform, setPlatform] = useState<string>(game?.platform || "")

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

          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Plataforma</label>
            <select
              value={platform}
              onChange={(e) => setPlatform(String(e.target.value))}
              className="mt-1 w-full border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
              style={{backgroundColor: '#0f0f1a'}}
              >
              <option value="">Todas las plataformas</option>
              <option value="PC">PC</option>
              <option value="PlayStation 5">PlayStation 5</option>
              <option value="PlayStation 4">PlayStation 4</option>
              <option value="PlayStation 3">PlayStation 3</option>
              <option value="PlayStation 2">PlayStation 2</option>
              <option value="PlayStation">PlayStation</option>
              <option value="PS Vita">PS Vita</option>
              <option value="PSP">PSP</option>
              <option value="Xbox One">Xbox One</option>
              <option value="Xbox Series S/X">Xbox Series S/X</option>
              <option value="Xbox 360">Xbox 360</option>
              <option value="Xbox">Xbox</option>
              <option value="Nintendo Switch">Nintendo Switch</option>
              <option value="Nintendo DS">Nintendo DS</option>
              <option value="Nintendo DSi">Nintendo DSi</option>
              <option value="Nintendo 64">Nintendo 64</option>
              <option value="Game Boy Advance">Game Boy Advance</option>
              <option value="Game Boy Color">Game Boy Color</option>
              <option value="Game Boy">Game Boy</option>
              <option value="GameCube">GameCube</option>
              <option value="Wii">Wii</option>
              <option value="SNES">SNES</option>
              <option value="iOS">iOS</option>
              <option value="Android">Android</option>

              </select>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => onSave(game!._id, status, hoursPlayed, platform)}
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