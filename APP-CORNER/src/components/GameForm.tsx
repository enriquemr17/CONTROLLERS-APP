import { useState } from "react";
import { addGame } from "../api/gamesApi";

export default function GameForm() {
  const [formData, setFormData] = useState({
    title: "",
    platform: "",
    status: "pending",
  });

  const [message, setMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // VALIDACION DE FORMULARIO
    if (!formData.title || !formData.platform) {
      setMessage("Rellena todos los campos");
      return;
    }

    try {
      await addGame(formData);
      window.location.href = "/collection"; 

      setMessage("Juego añadido correctamente");

      // RESET DE FORMULARIO
      setFormData({
        title: "",
        platform: "",
        status: "pending",
      });
    } catch (error) {
      setMessage("Error al añadir el juego");
    }
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
        <option value="pending">Pendiente</option>
        <option value="playing">Jugando</option>
        <option value="completed">Completado</option>
      </select>

      <button type="submit">Añadir</button>

      {message && <p>{message}</p>}
    </form>
  );
}


// Esta tsx es para crear los juegos y poder concectarlos a los inputs (GPT)
// Return de todo lo que queremos que se vea en pantalla (esto no es UI, es solo informacion)
// setMessage para validaciones (siempre tiene que haber algo escrito)


