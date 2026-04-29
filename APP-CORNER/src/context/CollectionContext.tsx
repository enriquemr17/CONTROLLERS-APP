import { createContext, useContext, useState } from "react";

interface CollectionContextProps  {
    listaJuegos: any []
    añadir: (juego: any) => void
    eliminar: (id: string) => void
    actualizar: (id: string, estado: any) => void
}

const CollectionContext = createContext <CollectionContextProps | null> (null)

export function CollectionProvider ({children} : {children: React.ReactNode}) {

    const [listaJuegos, setListaJuegos] = useState <any []> ([])
    const añadir = (juego: any) => setListaJuegos ([... listaJuegos, juego]) // recorre toda la lista de juegos y añadelo
    const eliminar = (id: string) => setListaJuegos (listaJuegos.filter (juego => juego.id !== id)) // mantén todos los juegos menos el id (string) que quiero eliminar 
    const actualizar = (id: string, estado: any) => setListaJuegos (listaJuegos.map (juego => juego.id === id ? {... juego, estado} : juego)) // mapea (.map) la lista de juegos y cambia su estado si es id, si no, déjalo como está 

    return (
        <CollectionContext.Provider value={{listaJuegos, añadir, eliminar, actualizar}}>
            {children}
        </CollectionContext.Provider>
    )

}

export function useCollection () {
    return useContext (CollectionContext)
}

// 1. Importamos las funciones que vamos a utilizar
// 2. Creamos la interface con los datos que necesitamos y que va a ser cada uno
// 3. Creamos el contexto y creamos la función 
