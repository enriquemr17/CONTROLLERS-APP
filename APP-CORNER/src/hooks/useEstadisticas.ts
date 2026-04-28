
import { useMemo } from "react"

interface  Estadisticas {
    totalJuegos: number
    completados: number
    jugando: number
    pendiente: number
    abandonados: number
    whislist: number
}

function useEstadisticas (juegos: any[]) {
     
    const estadisticas = useMemo<Estadisticas> (() => {
        const completados = juegos.filter(j => j.estado === `completado`).length
        const jugando = juegos.filter(j => j.estado === `jugando`).length
        const pendiente = juegos.filter(j => j.estado === `pendiente`).length
        const abandonados = juegos.filter(j => j.estado === `abandonado`).length
        const whislist = juegos.filter(j => j.estado === `whislist`).length


        return {
            totalJuegos: juegos.length,
            completados, jugando, pendiente, abandonados, whislist,
            
        }
    },  [juegos] // se recalcula cuando "juegos" cambia
    )
return {estadisticas}
}

export default useEstadisticas


// 1. Creamos la interface que va a tener con los datos que va a utilizar
// 2. Creamos la función diciendo cual va a ser el elemento (juego) y en que forma (array [])
// 3. Dentro de la función, utilizamos el useMemo en el que utilizamos los nombres de la interface y el estado en el que se encuentra cada uno
// 4. El return de estadisticas va fuera del useMemo porque es el que devuelve el valor al componente del hook. 