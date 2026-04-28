// CONEXIÓN CON LA API PARA LA CARGA DE JUEGOS 


import { useState, useEffect} from "react";


function useGames () {
     const [datos, setDatos] = useState<any[]> ([])

     const [cargando, setCargando] = useState<boolean> (true)

     const [error, setError] = useState< string|null> (null)
     
    useEffect (() => {
        // codigo ejecutable

        const fetchJuegos = async () => {
            // llamada a la API
            try {
            const response = await fetch(`https://api.rawg.io/api/games?key=a66dd6a48a4547158ab02855f1b6bba6`);
            const json = await response.json()
                setDatos(json.results)
            } catch (err) {
                setError(`Error al cargar los juegos`)
            } finally {
                setCargando(false)
            }
}

        fetchJuegos ()
    }, []) // [] para llamar a la API al cargar la pagina (dependencias)
    
    return {datos, cargando, error}
 }

 export default useGames


 // 1. USAMOS useState y useEffect, por lo que los tenemos que importar
 // 2. CREAMOS LA FUNCION DE USEGAMES A LA CUAL LE DECIMOS QUE DATOS VAMOS A UTILIZAR, INDICANDO QUE ES CADA UNO (ARRAY, BOOLEAN Y STRING/NULL)
 // 3. CREAMOS useEffect PARA LLAMAR A LA  API, QUE CONVIERTA LOS DATOS EN JSON Y EN CASO DE HABER ALGUN ERROR, LANZAR EL MMENSAJE DE ERROR (setError) Y DESPUÉS INDICAR QUE YA NO ESTÁ CARGANDO
 // 4. setCargando SE PONE EN FINALLY PORQUE PASE LO QUE PASE, LA PAGINA HA DEJADO DE CARGAR
 // 5. HACEMOS EL RETURN DE LOS DATOS QUE DEVUELVE EL HOOK
