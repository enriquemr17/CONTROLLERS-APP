
import React, { useState } from "react"
import { useCollection } from "../context/CollectionContext";
import type { CreateGameInput } from "../types/game";



export default function GameForm() {
    
    const [formData, setFormData] = useState<CreateGameInput> ({

    title: "",
    platform: "", 
    status: "pending"

}); 

const [message, setMessage] = useState(""); 
const {añadir} = useCollection()!; 

function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
  const {name, value} = e.target; 
    setFormData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value
  })); 

}
  return (
    <div>
        <input
            name="title" // campo a modificar
            value={formData.title} // de donde recoge el dato
            onChange={handleChange} // como actualiza el estado 
        />

        <input 
            name="platform"
            value={formData.platform}
            onChange={handleChange}
        />

        <input 
            name="status"
            value={formData.status}
            onChange={handleChange}
        />

    </div>
    
  );

function handleSubmit (e: any) {
    e.preventDefault(); 

    if (formData.title === "" || formData.platform === "") {
        setMessage ("Rellena todos los campos");
        return; 
    }
    setMessage ("Juego añadido correctamente");
    añadir(formData); 
    

    setFormData ({
        title: "",
        platform: "",
        status: "pending"
    });
}

return (

    <form onSubmit={handleSubmit}>

      

      <input

        name="title"

        value={formData.title}

        onChange={handleChange}

        placeholder="Título"

      />

      <input

        name="platform"

        value={formData.platform}

        onChange={handleChange}

        placeholder="Plataforma"

      />

      <select

        name="status"

        value={formData.status}

        onChange={handleChange}

      >

        <option value="pending">Pending</option>

        <option value="playing">Playing</option>

        <option value="completed">Completed</option>

        <option value="abandoned">Abandoned</option>

        <option value="wishlist">Wishlist</option>

      </select>

      <button type="submit">Añadir</button>

      {message && <p>{message}</p>}

    </form>

  );

}


// Esta tsx es para crear los juegos y poder concectarlos a los inputs (GPT)
// Return de todo lo que queremos que se vea en pantalla (esto no es UI, es solo informacion)
// setMessage para validaciones (siempre tiene que haber algo escrito)


