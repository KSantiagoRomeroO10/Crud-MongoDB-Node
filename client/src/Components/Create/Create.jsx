import './create.css'

import { useState } from 'react'

import axios from 'axios'

function Create() {
  const [nombre, setNombre] = useState('')
  const [numeroCamisa, setNumeroCamisa] = useState('')
  const [posicion, setPosicion] = useState('')
  const [equipo, setEquipo] = useState('')
  const [fechaInicial, setFechaInicial] = useState('')
  const [fechaFinal, setFechaFinal] = useState('')
  const [jugadorRegistrado, setJugadorRegistrado] = useState('')
  const [error, setError] = useState('')

  const handleNombre = (e) => {
    let nombre = e.target.value
    if(nombre){
      setNombre('')
    }
    setNombre(nombre)
  }

  const handleNumeroCamisa = (e) => {
    let camisa = e.target.value
    if(camisa){
      setNumeroCamisa('')
    }
    setNumeroCamisa(camisa)
  }

  const handlePosicion = (e) => {
    let posicion = e.target.value
    if(posicion){
      setPosicion('')
    }
    setPosicion(posicion)
  }

  const handleEquipo = (e) => {
    let equipo = e.target.value
    if(equipo){
      setEquipo('')
    }
    setEquipo(equipo)
  }

  const handleFechaInicial = (e) => {
    let fechaI = e.target.value
    if(fechaI){
      setFechaInicial('')
    }
    setFechaInicial(fechaI)
  }

  const handleFechaFinal = (e) => {
    let fechaI = e.target.value
    if(fechaI){
      setFechaFinal('')
    }
    setFechaFinal(fechaI)
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    if(nombre, numeroCamisa, posicion, equipo, fechaInicial, fechaFinal){
      const newJugador = {
        nombre,
        numeroCamisa, 
        posicion, 
        equipo, 
        fechaInicial, 
        fechaFinal
      }
      try {
        const response = await axios.post('http://localhost:3000/player/create', newJugador)  
        if(response) setJugadorRegistrado(response.data.response)
      }
      catch (error) {
        console.error(error)
      }
    }
    else{
      setError("Error al registrar al jugador.")
    }

  }

  return (
    <div className='form'>
      <h1>CRUD jugadores</h1>
      <hr/>
      <form onSubmit={handleSubmit}>

        <label>Nombre del jugador: </label>
        <input 
          type="text" 
          value={nombre}
          onChange={handleNombre}
        />

        <br/>

        <label>Número de camisa del jugador: </label>
        <input 
          type="number" 
          value={numeroCamisa}
          onChange={handleNumeroCamisa}
        />

        <br/>

        <label>Posición del jugador: </label>
        <input 
          type="text" 
          value={posicion}
          onChange={handlePosicion}
        />

        <br/>
        
        <label>Equipo del jugador: </label>
        <input 
          type="text"
          value={equipo}
          onChange={handleEquipo}        
        />

        <br/>

        <label>Fecha de inicio de contrato: </label>
        <input 
          type="date"
          value={fechaInicial}
          onChange={handleFechaInicial}
        />

        <br/>

        <label>Fecha final de contrato: </label>
        <input 
          type="date"
          value={fechaFinal}
          onChange={handleFechaFinal}
        />

        <br/>

        <button type="submit" className='boton agregar'>Agregar Jugador</button>

        <br/>

        {jugadorRegistrado && <p style={{ color: 'green' }}>{jugadorRegistrado}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

      </form>
      <button className='boton volver'><a href="/">Volver</a></button>
    </div>
  )
}

export default Create
