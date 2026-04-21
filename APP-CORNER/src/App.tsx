

import StatusBadge from './components/StatusBadge'

function App() {
  return (
    <div className="p-8 flex gap-4">
      <StatusBadge estado="jugando" />
      <StatusBadge estado="completado" />
      <StatusBadge estado="pendiente" />
      <StatusBadge estado="abandonado" />
      <StatusBadge estado="whislist" />
    </div>
  )
}

export default App