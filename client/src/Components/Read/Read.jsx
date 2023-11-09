import { useState } from 'react';
import axios from 'axios'

import './read.css'

import { NavLink } from 'react-router-dom';

const Read = () => {

  const [datos, setDatos] = useState([]);

  axios.get('http://localhost:3000/player/get')
  .then(response => response.data)
  .then((data) => {
    setDatos(data)
  })

  return (
    <>
      <h1>Jugadores</h1>
      <NavLink to={`/create`}>
        <button className='create'>Crear un nuevo jugador</button>
      </NavLink>
      <table>
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col"># Camisa</th>
            <th scope="col">Posición</th>
            <th scope="col">Equipo</th>
            <th scope="col">ID</th>
            <th scope="col">Fecha de inicio</th>
            <th scope="col">Fecha de fin</th>
            <th scope="col" colSpan={2}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datos && datos.map((dato) => (
            <tr key={dato._id}>
              <td>{dato.nombre}</td>
              <td>{dato.numero_camisa}</td>
              <td>{dato.posicion}</td>
              <td>{dato.equipo}</td>
              <td>{dato._id}</td>
              <td>{dato.fecha_inicio_contrato}</td>
              <td>{dato.fecha_fin_contrato}</td>
              <td className='button editar'>
                <button>
                  Editar
                </button>
              </td>
              <td className='button eliminar'>
                <button onClick={async () => {
                  await axios.delete(`http://localhost:3000/player/delete/${dato._id}`)  
                }}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Read
