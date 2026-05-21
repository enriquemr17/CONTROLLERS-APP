import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-8">
      <p className="text-6xl mb-4">🕹️</p>
      <p className="text-xs font-medium text-purple-400 tracking-widest uppercase mb-2">// Error 404</p>
      <h1 className="text-2xl font-semibold text-white mb-2">Página no encontrada</h1>
      <p className="text-sm text-gray-500 mb-6">Esta pantalla no existe en el juego</p>
      <Link
        to="/"
        className="bg-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFoundPage