import { useState, useCallback } from "react";


function useBusqueda () {
    const [nombre, setNombre] = useState <string> ("")



    const handleBusqueda = useCallback ((texto:string)=> {

        setNombre (texto)
    }, [])
    
 return {nombre, handleBusqueda}
}

export default useBusqueda 