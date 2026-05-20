import { useState } from "react";
import { searchGames, addGame } from "../api/gamesApi";

function HomePage() {
  const [query, setQuery] = useState("");
  const [games, setGames] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    console.log("BOTON BUSCAR FUNCIONA"); 
    
    if (!query.trim()) return;

    try {
      setLoading(true);

      const data = await searchGames(query);
      setGames(data.results);
    

    } catch (error) {
      console.error("Error buscando juegos", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleAddGame(game: any) {
    try {
      await addGame({
        title: game.name,
        platform: game.platforms?.[0]?. platform?.name || "Unknow", 
        status: "pending",
        portada: game.background_image,
        hoursPlayed: 0
      });

      alert("Juego añadido correctamente");
    } catch (error) {
      console.error("Error añadiendo juego", error);
    }
  }

return (
  <div className="p-6">

    <h1 className="text-2xl font-bold mb-4">
      Buscar juegos
    </h1>

    <div className="flex gap-2 mb-6">
      <input
        className="border p-2 rounded w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar juego..."
      />

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleSearch}
      >
        Buscar
      </button>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {games.map((game: any) => (
        <div key={game.id} className="border rounded-lg p-2">

          <img
            src={game.background_image}
            className="w-full h-40 object-cover rounded"
          />

          <h3 className="font-semibold mt-2">
            {game.name}
          </h3>

          <button
            className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
            onClick={() => handleAddGame(game)}
          >
            Añadir
          </button>

        </div>
      ))}
    </div>

  </div>
);
}

export default HomePage;