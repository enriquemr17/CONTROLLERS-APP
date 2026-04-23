import StatusBadge, {type Estado} from "./StatusBadge";

interface FilterBarProps {
    value: Estado | null    // puede tener estado o ser null y mostrar todos los estados
    onChange: (valor: Estado | null) => void
}

function FilterBar ({value, onChange}: FilterBarProps) {
    const estados: Estado [] = [`pendiente`, `jugando`, `completado`, `abandonado`, `whislist`]
    
    return (
        <div className= "flex-gap-2 flex-wrap">
            <button
                onClick={() => onChange(null)}
                className={value === null ? "bg-blue-500 text-white px-4 py-2 rounded-full" : "bg-gray-100 px-4 py-2 rounded-full"}
                >Todos</button>
            {estados.map((estado) => (
                <button key={estado}
                        onClick={() => onChange(estado)} // clickea, cambia el estado
                        className={value === estado ? "bg-blue-500 text-white px-4 py-2 rounded-full" : "bg-gray-100 px-4 py-2 rounded-full"}
                        >
                    {estado}
                </button>
            ))}
        </div>
    )
}


export default FilterBar


// 1. Usamos null por si no queremos filtrar por estado 
// 2. llamamos a todos los estados creando una variable tipo ARRAY
// 3. creamos el botón de "null" en el que ponga "todos" haciendo referencia a todos los estados 
// 4. creamos el botón de cada estado utilizando onchange para llamar al padre y que detecte que estado se está usando