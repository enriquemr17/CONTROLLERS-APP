import React, { useState } from "react"
import { useCollection } from "../context/CollectionContext"
import type { CreateGameInput } from "../types/game"

export default function GameForm() {
  const [formData, setFormData] = useState<CreateGameInput>({
    title: "",
    platform: "",
    status: "pending"
  })
  const [message, setMessage] = useState("")
  const { añadir } = useCollection()!

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (formData.title === "" || formData.platform === "") {
      setMessage("Rellena todos los campos")
      return
    }
    añadir(formData)
    setMessage("Juego añadido correctamente")
    setFormData({ title: "", platform: "", status: "pending" })
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
        <option value="abandoned">Abandonado</option>
        <option value="wishlist">Wishlist</option>
      </select>
      <button type="submit">Añadir juego</button>
      {message && <p>{message}</p>}
    </form>
  )
}

// Esta tsx es para crear los juegos y poder concectarlos a los inputs (GPT)
// Return de todo lo que queremos que se vea en pantalla (esto no es UI, es solo informacion)
// setMessage para validaciones (siempre tiene que haber algo escrito)


