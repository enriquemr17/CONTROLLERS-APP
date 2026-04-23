import { useState } from 'react'
import SearchBar from './components/SearchBar'

function App() {
  const [busqueda, setBusqueda] = useState('')

  return (
    <div className="p-8">
      <SearchBar value={busqueda} onChange={setBusqueda} />
      <p>Buscando: {busqueda}</p>
    </div>
  )
}

export default App