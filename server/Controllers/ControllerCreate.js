const { Jugador } = require('../Models/Index')

const ControllerCreate = async (req, res) => {
  try{
    const { nombre, numeroCamisa, posicion, equipo, fechaInicial, fechaFinal } = req.body;
    const nuevoJugador =  await new Jugador({
      nombre: nombre,
      numero_camisa: numeroCamisa,
      posicion: posicion,
      equipo: equipo,
      fecha_inicio_contrato: new Date(fechaInicial),   // '2024-12-31'
      fecha_fin_contrato: new Date(fechaFinal)
    })
    await nuevoJugador.save()
    res.status(201).json({response: 'Jugador registrado con éxito.'})
  }
  catch(error){
    res.status(500).json({response: 'Error del servidor.'})
  }
}

module.exports = ControllerCreate