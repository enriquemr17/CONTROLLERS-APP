interface SearchBarProps {
    value: string
    onChange: (valor: string) => void
}

function SearchBar({value, onChange}: SearchBarProps) {
    return (
        <input type="text" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar juego..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        
        />
    )
}

export default SearchBar


// 1. Necesitamos un valor (string) como entrada para la busqueda y un "avisador" de que está cambiando (onchange)
// 2. e -> evento; dentro de un evento hay una propiedad (target) que es el propio input, y dentro de target, un value, que es el texto (string)
