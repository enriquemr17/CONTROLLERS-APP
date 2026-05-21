import { type Estado } from "./StatusBadge"

interface FilterBarProps {
  value: Estado | null
  onChange: (valor: Estado | null) => void
}

function FilterBar({ value, onChange }: FilterBarProps) {
  const estados: Estado[] = ['pending', 'playing', 'completed', 'abandoned', 'wishlist']

  return (
    <div className="flex gap-2 flex-wrap">
      <button
        onClick={() => onChange(null)}
        className={value === null
          ? "px-4 py-1.5 rounded-full text-sm font-medium bg-purple-600 text-white"
          : "px-4 py-1.5 rounded-full text-sm border border-gray-700 text-gray-400 hover:border-purple-600 hover:text-purple-400 transition-colors"
        }
      >
        Todos
      </button>
      {estados.map((estado) => (
        <button
          key={estado}
          onClick={() => onChange(estado)}
          className={value === estado
            ? "px-4 py-1.5 rounded-full text-sm font-medium bg-purple-600 text-white"
            : "px-4 py-1.5 rounded-full text-sm border border-gray-700 text-gray-400 hover:border-purple-600 hover:text-purple-400 transition-colors"
          }
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