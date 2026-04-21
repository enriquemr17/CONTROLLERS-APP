type Estado = 'pendiente' | 'jugando' | 'completado' | 'abandonado' | 'whislist'

interface StatusBadgeProps {
    estado: Estado; 
    
}

function comprobarEstado (estado: Estado): string {
    switch(estado) {
        case "pendiente": 
            return "Juego en estado pendiente. ¡Cada vez queda menos para empezarlo!"
        
        case "jugando": 
            return "Lo estás jugando. ¡A tope!"
        
        case "abandonado": 
            return "Juego abandonado, que pena"
        
        case "completado": 
            return "¡Enhorabuena, has completado este videojuego, ve a por más!"
        
        case "whislist": 
            return "Juego añadido a lista de deseos"
        
        default: 
            const comprobacionExhaustiva: never = estado; 
            throw new Error(`Estado no manejado: ${comprobacionExhaustiva}`)


    }


}

function StatusBadge({estado}: StatusBadgeProps) {
     
const colores: Record<Estado, string> = {
  pendiente: "bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium",
  jugando: "bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium",
  completado: "bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium",
  abandonado: "bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium",
  whislist: "bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"

}
    
    return (
            <span className={colores[estado]}>
                {estado}
            </span>
        )
    }

export default StatusBadge
    
