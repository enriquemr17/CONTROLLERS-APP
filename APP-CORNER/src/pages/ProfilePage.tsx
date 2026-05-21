function ProfilePage() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-8">
      <p className="text-xs font-medium text-purple-400 tracking-widest uppercase mb-1">// Perfil</p>
      <h1 className="text-2xl font-semibold text-white mb-6">Mi perfil</h1>

      <div className="rounded-xl border border-gray-800 p-6 max-w-md" style={{ backgroundColor: '#111120' }}>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-purple-900 border border-purple-700 flex items-center justify-center text-2xl">
            🎮
          </div>
          <div>
            <h2 className="font-semibold text-white">Usuario</h2>
            <p className="text-sm text-gray-500">Jugador</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</label>
            <input
              className="mt-1 w-full border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
              style={{ backgroundColor: '#0f0f1a' }}
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Bio</label>
            <textarea
              className="mt-1 w-full border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500 resize-none"
              style={{ backgroundColor: '#0f0f1a' }}
              rows={3}
              placeholder="Cuéntanos algo sobre ti..."
            />
          </div>
          <button className="w-full bg-purple-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage