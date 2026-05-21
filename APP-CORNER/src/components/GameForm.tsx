import React, { useState } from "react"
import { useCollection } from "../context/CollectionContext"
import type { CreateGameInput } from "../types/game"

export default function GameForm() {
  const [formData, setFormData] = useState<CreateGameInput>({
    title: "",
    platform: "",
    status: "pending",
    hoursPlayed: 0
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
    if (!formData.title || !formData.platform) {
      setMessage("Rellena todos los campos")
      return
    }
    añadir(formData)
    setMessage("¡Juego añadido correctamente!")
    setFormData({ title: "", platform: "", status: "pending", hoursPlayed: 0 })
  }

  return (
    <div className="rounded-xl border border-gray-800 p-6" style={{ backgroundColor: '#111120' }}>
      <h2 className="text-white font-semibold mb-4">Añadir juego manualmente</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Título"
          className="w-full border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
          style={{ backgroundColor: '#0f0f1a' }}
        />
        <input
          name="platform"
          value={formData.platform}
          onChange={handleChange}
          placeholder="Plataforma"
          className="w-full border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
          style={{ backgroundColor: '#0f0f1a' }}
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
          style={{ backgroundColor: '#0f0f1a' }}
        >
          <option value="pending">Pendiente</option>
          <option value="playing">Jugando</option>
          <option value="completed">Completado</option>
          <option value="abandoned">Abandonado</option>
          <option value="wishlist">Lista de deseos</option>
        </select>
        <input
          name="hoursPlayed"
          type="number"
          value={formData.hoursPlayed}
          onChange={handleChange}
          placeholder="Horas jugadas"
          className="w-full border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
          style={{ backgroundColor: '#0f0f1a' }}
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
        >
          Añadir juego
        </button>
        {message && <p className="text-sm text-center text-purple-400">{message}</p>}
      </form>
    </div>
  )
}

// Esta tsx es para crear los juegos y poder concectarlos a los inputs (GPT)
// Return de todo lo que queremos que se vea en pantalla (esto no es UI, es solo informacion)
// setMessage para validaciones (siempre tiene que haber algo escrito)


