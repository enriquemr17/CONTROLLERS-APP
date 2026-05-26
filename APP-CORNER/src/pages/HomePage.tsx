import { useEffect, useState } from "react"
import { searchGames, addGame } from "../api/gamesApi"
import { getNuevosLanzamientos, getMasJugados, getMejorValorados, getProximosLanzamientos } from "../api/gamesApi"

function HomePage() {
  const [query, setQuery] = useState("")
  const [games, setGames] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [plataforma, setPlataforma] = useState("")
  const [nuevosLanzamientos, setNuevosLanzamientos] = useState<any[]>([])
  const [mejorValorados, setMejorValorados] = useState<any[]>([])
  const [masJugados, setMasJugados] = useState<any[]>([])
  const [proximosLanzamientos, setProximosLanzamientos] = useState<any[]>([])

  useEffect(() => {
    async function cargarSecciones() {
      const data1 = await getMejorValorados()
      setMejorValorados(data1.results)
      const data2 = await getMasJugados()
      setMasJugados(data2.results)
      const data3 = await getNuevosLanzamientos()
      setNuevosLanzamientos(data3.results)
      const data4 = await getProximosLanzamientos()
      setProximosLanzamientos(data4.results)
      
    }
    cargarSecciones()
  }, [plataforma])

  async function handleSearch() {
    if (!query.trim()) return
    try {
      setLoading(true)
      const data = await searchGames(query)
      setGames(data.results)
    } catch (error) {
      console.error("Error buscando juegos", error)
    } finally {
      setLoading(false)
    }
  }

  async function handleAddGame(game: any) {
    try {
      await addGame({
        title: game.name,
        platform: game.platforms?.[0]?.platform?.name || "Unknown",
        status: "pending",
        portada: game.background_image,
        hoursPlayed: 0
      })
      alert("¡Juego añadido a tu colección!")
    } catch (error) {
      console.error("Error añadiendo juego", error)
    }
  }

  return (
    <div className="mx-auto px-8 py-12">
      <p className="text-xs font-medium text-purple-400 tracking-widest uppercase mb-1">// Explorar</p>
      <h1 className="text-2xl font-semibold text-white mb-6">Encuentra tu próximo juego</h1>

      <div className="flex gap-3 mb-8">
        <input
          className="flex-1 border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500"
          style={{ backgroundColor: '#111120' }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Buscar juego..."
        />
        <button
          className="bg-purple-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
          onClick={handleSearch}
        >
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </div>

      {games.length > 0 && (
        <>
          <button
            onClick={() => setGames([])}
            className="text-sm text-purple-400 mb-6 hover:text-purple-300 block"
          >
            ← Volver
          </button>

          <select 
            value={plataforma}
            onChange={(e)=> setPlataforma(e.target.value)}
            className="border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500 mb-8"
            style={{backgroundColor: '#111120'}}
          >
              <option value="4">PC</option>
              <option value="187">PS5</option>
              <option value="18">PS4</option>
              <option value="16">PS3</option>
              <option value="15">PS2</option>
              <option value="27">PS1</option>
              <option value="19">PS Vita</option>
              <option value="17">PSP</option>
              <option value="1">Xbox One</option>
              <option value="186">Xbox Series S/X</option>
              <option value="14">Xbox 360</option>
              <option value="80">Xbox</option>
              <option value="7">Switch</option>
              <option value="8">Nintendo DS</option>
              <option value="9">Nintendo DSi</option>
              <option value="13">Nintendo 64</option>
              <option value="11">Game Boy Advance</option>
              <option value="26">Game Boy Color</option>
              <option value="24">Game Boy</option>
              <option value="105">GameCube</option>
              <option value="106">Wii</option>
              <option value="11">SNES</option>
              <option value="3">iOS</option>
              <option value="21">Android</option>
          </select>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {games.map((game: any) => (
              <div key={game.id} className="rounded-xl border border-gray-800 overflow-hidden hover:border-purple-500 transition-colors" style={{ backgroundColor: '#111120' }}>
                <div className="relative">
                  <img src={game.background_image} alt={game.name} className="w-full h-36 object-cover" />
                  <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-purple-300 text-xs px-2 py-0.5 rounded border border-purple-800 font-medium">
                    {game.platforms?.[0]?.platform?.name || "Unknown"}
                  </div>
                  {game.rating > 0 && (
                    <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-yellow-400 text-xs px-2 py-0.5 rounded font-medium">
                      ★ {game.rating.toFixed(1)}
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-sm text-white mb-1 truncate">{game.name}</h3>
                  <p className="text-xs text-gray-500 mb-3">{game.genres?.[0]?.name || ""}</p>
                  <button
                    className="w-full text-xs py-1.5 rounded-lg border border-purple-700 text-purple-400 hover:bg-purple-900 transition-colors font-medium"
                    onClick={() => handleAddGame(game)}
                  >
                    + Añadir a colección
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {games.length === 0 && (
        <>
          <div className="mb-12">
            <p className="text-xs text-purple-400 uppercase tracking-widest mb-1">// Tendencias</p>
            <h2 className="text-lg font-semibold text-white mb-4">Mejor valorados</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {mejorValorados.map((game: any) => (
                <div key={game.id} className="min-w-[200px] rounded-xl border border-gray-800 overflow-hidden hover:border-purple-500 transition-colors" style={{ backgroundColor: '#111120' }}>
                  <div className="relative">
                    <img src={game.background_image} alt={game.name} className="w-full h-36 object-cover" />
                    <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-purple-300 text-xs px-2 py-0.5 rounded border border-purple-800 font-medium">
                      {game.platforms?.[0]?.platform?.name || "Unknown"}
                    </div>
                    {game.rating > 0 && (
                      <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-yellow-400 text-xs px-2 py-0.5 rounded font-medium">
                        ★ {game.rating.toFixed(1)}
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-sm text-white mb-1 truncate">{game.name}</h3>
                    <p className="text-xs text-gray-500 mb-3">{game.genres?.[0]?.name || ""}</p>
                    <button className="w-full text-xs py-1.5 rounded-lg border border-purple-700 text-purple-400 hover:bg-purple-900 transition-colors font-medium" onClick={() => handleAddGame(game)}>
                      + Añadir a colección
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-800 my-8" />

          <div className="mb-12">
            <p className="text-xs text-orange-400 uppercase tracking-widest mb-1">// Popular</p>
            <h2 className="text-lg font-semibold text-white mb-4">Más jugados</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {masJugados.map((game: any) => (
                <div key={game.id} className="min-w-[200px] rounded-xl border border-gray-800 overflow-hidden hover:border-orange-500 transition-colors" style={{ backgroundColor: '#111120' }}>
                  <div className="relative">
                    <img src={game.background_image} alt={game.name} className="w-full h-36 object-cover" />
                    <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-orange-300 text-xs px-2 py-0.5 rounded border border-orange-800 font-medium">
                      {game.platforms?.[0]?.platform?.name || "Unknown"}
                    </div>
                    {game.rating > 0 && (
                      <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-yellow-400 text-xs px-2 py-0.5 rounded font-medium">
                        ★ {game.rating.toFixed(1)}
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-sm text-white mb-1 truncate">{game.name}</h3>
                    <p className="text-xs text-gray-500 mb-3">{game.genres?.[0]?.name || ""}</p>
                    <button className="w-full text-xs py-1.5 rounded-lg border border-orange-700 text-orange-400 hover:bg-orange-900 transition-colors font-medium" onClick={() => handleAddGame(game)}>
                      + Añadir a colección
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-800 my-8" />

          <div className="mb-12">
            <p className="text-xs text-cyan-400 uppercase tracking-widest mb-1">// Recientes</p>
            <h2 className="text-lg font-semibold text-white mb-4">Nuevos lanzamientos</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {nuevosLanzamientos.map((game: any) => (
                <div key={game.id} className="min-w-[200px] rounded-xl border border-gray-800 overflow-hidden hover:border-cyan-500 transition-colors" style={{ backgroundColor: '#111120' }}>
                  <div className="relative">
                    <img src={game.background_image} alt={game.name} className="w-full h-36 object-cover" />
                    <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-cyan-300 text-xs px-2 py-0.5 rounded border border-cyan-800 font-medium">
                      {game.platforms?.[0]?.platform?.name || "Unknown"}
                    </div>
                    {game.rating > 0 && (
                      <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-yellow-400 text-xs px-2 py-0.5 rounded font-medium">
                        ★ {game.rating.toFixed(1)}
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-sm text-white mb-1 truncate">{game.name}</h3>
                    <p className="text-xs text-gray-500 mb-3">{game.genres?.[0]?.name || ""}</p>
                    <button className="w-full text-xs py-1.5 rounded-lg border border-cyan-700 text-cyan-400 hover:bg-cyan-900 transition-colors font-medium" onClick={() => handleAddGame(game)}>
                      + Añadir a colección
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-800 my-8" />

          <div className="mb-12">
            <p className="text-xs text-yellow-400 uppercase tracking-widest mb-1">// Para ir ahorrando</p>
            <h2 className="text-lg font-semibold text-white mb-4">Próximos lanzamientos</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {proximosLanzamientos.map((game: any) => (
                <div key={game.id} className="min-w-[200px] rounded-xl border border-gray-800 overflow-hidden hover:border-yellow-500 transition-colors" style={{ backgroundColor: '#111120' }}>
                  <div className="relative">
                    <img src={game.background_image} alt={game.name} className="w-full h-36 object-cover" />
                    <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-yellow-300 text-xs px-2 py-0.5 rounded border border-yellow-800 font-medium">
                      {game.platforms?.[0]?.platform?.name || "Unknown"}
                    </div>
                    {game.rating > 0 && (
                      <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-yellow-400 text-xs px-2 py-0.5 rounded font-medium">
                        ★ {game.rating.toFixed(1)}
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="font-semibold text-sm text-white mb-1 truncate">{game.name}</h3>
                    <p className="text-xs text-gray-500 mb-3">{game.genres?.[0]?.name || ""}</p>
                    <button className="w-full text-xs py-1.5 rounded-lg border border-yellow-700 text-yellow-400 hover:bg-yellow-900 transition-colors font-medium" onClick={() => handleAddGame(game)}>
                      + Añadir a colección
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default HomePage