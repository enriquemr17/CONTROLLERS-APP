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
              <option value="">Todas las platafromas</option>
              <option value="4">PC</option>
              <option value="187">PS5</option>
              <option value="18">PS4</option>
              <option value="16">PS3</option>
              <option value="15">PS2</option>
              <option value="27">PS1</option>
              <option value="19">PS Vita</option>
              <option value="17">PSP</option>
              <option value="1">Xbox One</option>
              <option value="186">Xbox Series S/X</option>
              <option value="14">Xbox 360</option>
              <option value="80">Xbox</option>
              <option value="7">Switch</option>
              <option value="8">Nintendo DS</option>
              <option value="9">Nintendo DSi</option>
              <option value="13">Nintendo 64</option>
              <option value="11">Game Boy Advance</option>
              <option value="26">Game Boy Color</option>
              <option value="24">Game Boy</option>
              <option value="105">GameCube</option>
              <option value="106">Wii</option>
              <option value="11">SNES</option>
              <option value="3">iOS</option>
              <option value="21">Android</option>

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