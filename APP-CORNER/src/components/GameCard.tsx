import StatusBadge, {type Estado} from "./StatusBadge";



interface GameCardProps {
    readonly id: string; 
    titulo: string; 
    plataforma: string; 
    estado: Estado; 
    portada: string; // En TypeScript las URLS de imágenes se manejan como strings 
    horasJugadas: number; 
}

function GameCard ({id, titulo, plataforma, estado, portada, horasJugadas}: GameCardProps) {
    
   return (
  <div className="bg-white rounded-xl shadow-md p-4 w-64">
    <img src={portada} alt={titulo} className="w-full h-40 object-cover rounded-lg mb-3" />
    <h3 className="font-semibold text-lg">{titulo}</h3>
    <p className="text-gray-500 text-sm">{plataforma}</p>
    <p className="text-gray-500 text-sm">{horasJugadas} horas</p>
    <div className="mt-3">
      <StatusBadge estado={estado} />
    </div>
  </div>
)
   
}

export default GameCard
