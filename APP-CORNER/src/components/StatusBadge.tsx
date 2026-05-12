export type Estado = 'pendiente' | 'jugando' | 'completado' | 'abandonado' | 'whislist'

interface StatusBadgeProps {
    estado: Estado; 
    
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
    
