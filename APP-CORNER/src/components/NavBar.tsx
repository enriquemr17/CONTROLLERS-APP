import { NavLink } from 'react-router-dom'

function NavBar() {
  const linkBase = "text-sm transition-colors duration-200"
  const linkActive = `${linkBase} text-purple-600 font-medium border-b border-purple-600 pb-0.5`
  const linkInactive = `${linkBase} text-gray-500 hover:text-purple-500`

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🎮</span>
        <span className="text-base font-semibold tracking-widest text-purple-600">CONTROLLERS</span>
      </div>
      <div className="flex gap-8">
        <NavLink to="/" className={({ isActive }) => isActive ? linkActive : linkInactive}>Home</NavLink>
        <NavLink to="/coleccion" className={({ isActive }) => isActive ? linkActive : linkInactive}>Colección</NavLink>
        <NavLink to="/perfil" className={({ isActive }) => isActive ? linkActive : linkInactive}>Perfil</NavLink>
      </div>
    </nav>
  )
}

export default NavBar