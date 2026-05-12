import { createContext, useContext, useState } from "react";
import type { Game, CreateGameInput, GameStatus } from "../types/game";

interface CollectionContextProps {
  listaJuegos: Game[];
  añadir: (juego: CreateGameInput) => void;
  eliminar: (id: string) => void;
  actualizar: (id: string, status: GameStatus) => void;
}

const CollectionContext = createContext<CollectionContextProps | null>(null);

export function CollectionProvider({ children }: { children: React.ReactNode }) {
  const [listaJuegos, setListaJuegos] = useState<Game[]>([]);

  const añadir = (juego: CreateGameInput) => {
    const nuevoJuego: Game = {
      id: crypto.randomUUID(),
      ...juego,
    };

    setListaJuegos((prev) => [...prev, nuevoJuego]);
  };

  const eliminar = (id: string) => {
    setListaJuegos((prev) => prev.filter((juego) => juego.id !== id));
  };

  const actualizar = (id: string, status: GameStatus) => {
    setListaJuegos((prev) =>
      prev.map((juego) =>
        juego.id === id ? { ...juego, status } : juego
      )
    );
  };

  return (
    <CollectionContext.Provider
      value={{ listaJuegos, añadir, eliminar, actualizar }}
    >
      {children}
    </CollectionContext.Provider>
  );
}

export function useCollection() {
  const context = useContext(CollectionContext);

  if (!context) {
    throw new Error("useCollection must be used within a CollectionProvider");
  }

  return context;
}

// 1. Importamos las funciones que vamos a utilizar
// 2. Creamos la interface con los datos que necesitamos y que va a ser cada uno
// 3. Creamos el contexto y creamos la función 
