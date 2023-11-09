const { Jugador } = require('../Models/Index')

const ControllerCreate = async (req, res) => {
  try{
    await Jugador.find()
    .then((dates) => {
      if(dates){
        res.status(200).json(dates)
      }
      else{
        res.status(200).json({"Sin datos: ": "La base de datos está vacia."})
      }
    })
  }
  catch(error){
    res.status(500).json({response: 'Error del servidor.', error: error})
  }
}

module.exports = ControllerCreate