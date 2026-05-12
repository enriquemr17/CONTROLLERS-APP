import FilterBar from "./components/FilterBar";
import GameCard from "./components/GameCard";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import { type Estado } from "./components/StatusBadge";
import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/CollectionPage";
import CollectionPage from "./pages/CollectionPage"
import ProfilePage from "./pages/CollectionPage"
import GameDetailPage from "./pages/CollectionPage"
import NotFoundPage from "./pages/CollectionPage"




function App() {
  const [busqueda, setBusqueda] = useState('')
  const [filtro, setFiltro] = useState<Estado | null>(null)


return (
  <div className="flex">
    <NavBar/>
    <main>
      <Routes>
        <Route path="/" element = {<HomePage/>} />
        <Route path="/Coleccion" element = {<CollectionPage/>} />
        <Route path="/perfil" element = {<ProfilePage/>} /> 
        <Route path="/detalleJuego" element = {<GameDetailPage/>} />
        <Route path="*" element = {<NotFoundPage/>} />
      </Routes>
    </main>
  </div>
)
}

export default App