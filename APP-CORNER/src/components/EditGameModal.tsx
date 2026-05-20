import { useState } from "react"
import type { Game, GameStatus } from "../types/game"



interface GameModalProps {
    isOpen: boolean
    game: Game | null // juego que se está editando
    onSave : (id: string, status: GameStatus, hoursPlayed: number) => void // guardar cambios 
    onClose: () => void // cerrar el modal
}

function EditGameModal ({isOpen, game, onSave, onClose}: GameModalProps) {

const [status, setStatus] = useState<GameStatus> (game?.status || "pending")
const [hoursPlayed, setHoursPlayed] = useState<number>(game?.hoursPlayed || 0)
 
if (!isOpen) return null 

return (
   

<div className = "flex-gap-2 flex-wrap">

<select value = {status} onChange={(e) => setStatus (e.target.value as GameStatus)}>
    <option value="pending">Pendiente</option>
    <option value="playing">Jugando</option>
    <option value="abandoned">Abandonado</option>
    <option value="completed">Completado</option>
    <option value="wishlist">Lista de deseos</option>
</select>

<input type="number"
    value={hoursPlayed}
    onChange={(e) => setHoursPlayed(Number(e.target.value))}
    />

<button onClick={() => onSave(game!.id, status, hoursPlayed)}>Guardar</button>
<button onClick={onClose}>Cerrar</button>

</div>
        
)
}

export default EditGameModal