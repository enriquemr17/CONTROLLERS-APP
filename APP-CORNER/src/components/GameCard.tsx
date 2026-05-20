
import StatusBadge, {type Estado} from "./StatusBadge";
import { Link } from "react-router-dom";


interface GameCardProps {
    id: string; 
    title: string; 
    platform: string; 
    status: Estado; 
    portada?: string; // En TypeScript las URLS de imágenes se manejan como strings 
    hoursPlayed?: number; 
    onDelete: (id:string) => void;
    onEdit: (id: string) => void;
}

function GameCard ({ id, title, platform, status, portada, hoursPlayed, onDelete, onEdit}: GameCardProps) {
    
return (
  <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">

    <img
      src={portada}
      alt={title}
      className="w-full h-40 object-cover rounded-lg mb-3"
    />

    <h3 className="font-bold text-lg">{title}</h3>
    <p className="text-gray-500 text-sm">{platform}</p>
    <p className="text-gray-500 text-sm">{hoursPlayed} horas</p>
    <StatusBadge estado={status} />
    
    <div className="flex gap-2 mt-3">
      
      <button
      onClick={()=> onEdit(id)}
      className="bg-yellow-500 text-white px-3 py-1 rounded">Editar</button>
    
      <button
        onClick={() => onDelete(id)}
        className="bg-red-500 text-white px-3 py-1 rounded">Eliminar</button>
    </div>

  </div>
);
   
}

export default GameCard
