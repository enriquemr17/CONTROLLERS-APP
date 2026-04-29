import { createContext, useContext, useState } from "react";


interface AuthContextProps {
    usuario : string | null
    cargando: boolean
    login: () => void // no devuelve nada
    logout: () => void // no devuelve nada
}

const AuthContext = createContext<AuthContextProps | null>(null)

export function AuthProvider ({children}: {children: React.ReactNode}) {
    const [usuario, setUsuario] = useState <string | null> (null)
    const [cargando, setCargando] = useState <boolean> (true)

    const login = () => setUsuario ("usuario@email.com")
    const logout = () => setUsuario(null)

    return (
        <AuthContext.Provider value={{usuario, cargando, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth () {
    return useContext(AuthContext)
}

// 1. Importamos lo necesario para el hook
// 2. Creamos la interface de los datos que neceitamos
// 3. Continuamos creando el Provider (componente que da acceso al contexto)
// 4. Exportar la función y crear el hook con useContext