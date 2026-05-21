import FilterBar from "./components/FilterBar";
import GameCard from "./components/GameCard";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import { type Estado } from "./components/StatusBadge";
import {Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage"
import ProfilePage from "./pages/ProfilePage"
import GameDetailPage from "./pages/GameDetailPage"
import NotFoundPage from "./pages/NotFoundPage"




function App() {
  const [busqueda, setBusqueda] = useState('')
  const [filtro, setFiltro] = useState<Estado | null>(null)


return (
  <div className="min-h-screen bg-gray-50">
    <NavBar/>
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/coleccion" element={<CollectionPage/>} />
        <Route path="/perfil" element={<ProfilePage/>} />
        <Route path="/juego/:id" element={<GameDetailPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </main>
  </div>
)
}

export default App