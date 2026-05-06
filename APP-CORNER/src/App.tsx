import FilterBar from "./components/FilterBar";
import GameCard from "./components/GameCard";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import { type Estado } from "./components/StatusBadge";

function App() {
  const [busqueda, setBusqueda] = useState('')
  const [filtro, setFiltro] = useState<Estado | null>(null)


return (
  <div className="flex">
    <NavBar/>
    <main>
      <SearchBar 
        value={busqueda} 
        onChange={setBusqueda}>
      </SearchBar>
      <FilterBar
        value = {filtro}
        onChange = {setFiltro}
        ></FilterBar>
      <GameCard
        id = {"1"}
        portada="https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/bJ65Z2b1999PQFnlz2oRVFvM.png"
        titulo = {"The last of us"}
        plataforma = {"ps4"}
        estado = {"jugando"}
        horasJugadas = {30}
      ></GameCard>
       <GameCard
        id = {"2"}
        portada="https://media.vandal.net/i/1200x1200/7-2025/16/202571615563591_1.jpg"
        titulo = {"EA SPORTS FC 26"}
        plataforma = {"ps5"}
        estado = {"whislist"}
        horasJugadas = {0}
      ></GameCard>
       <GameCard
        id = {"3"}
        portada="https://media.vandal.net/m/96930/pokemon-diamante-brillante-perla-reluciente-202152616395247_1.jpg"
        titulo = {"POKEMON DIAMANTE BRILLANTE"}
        plataforma = {"Nintendo Switch"}
        estado = {"completado"}
        horasJugadas = {90}
      ></GameCard>
    </main>
  </div>
)
}

export default App