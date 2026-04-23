import { Link } from "react-router-dom";

function NavBar () {
    
    const linkClases = "bg-blue-500 text-white px-4 py-2 rounded-full"
    
    return (
        <nav className="flex-gap-2 flex-wrap">
            <Link className = {linkClases} to = "/home">Home</Link>
            <Link className = {linkClases} to = "/collection">Collection</Link>
            <Link className = {linkClases} to = "/gameDetail">Game Detail</Link>
            <Link className = {linkClases} to = "/profile">Profile</Link>
        </nav>
    )
}


export default NavBar