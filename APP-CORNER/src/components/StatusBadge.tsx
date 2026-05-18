export type Estado = 'pending' | 'playing' | 'completed' | 'abandoned' | 'whishlist'

interface StatusBadgeProps {
    estado: Estado; 
    
}



function StatusBadge({estado}: StatusBadgeProps) {
     
const colores: Record<Estado, string> = {
  pending: "bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium",
  playing: "bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium",
  completed: "bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium",
  abandoned: "bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium",
  whishlist: "bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"

}
    
    return (
            <span className={colores[estado]}>
                {estado}
            </span>
        )
}


export default StatusBadge
    
