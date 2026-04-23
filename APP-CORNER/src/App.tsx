import { useState } from 'react'
import FilterBar from './components/FilterBar'
import { type Estado } from './components/StatusBadge'

function App() {
  const [filtro, setFiltro] = useState<Estado | null>(null)

  return (
    <div className="p-8">
      <FilterBar value={filtro} onChange={setFiltro} />
      <p>Filtro activo: {filtro ?? 'Todos'}</p>
    </div>
  )
}

export default App