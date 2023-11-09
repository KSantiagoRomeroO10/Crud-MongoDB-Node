const { Jugador } = require('../Models/Index')

const ControllerDelete = (req, res) => {

  const { id } = req.params

  Jugador.findByIdAndDelete({_id: id})
  .then()
  .catch(err => {
    res.status(400).json({'error': err})
  })

}

module.exports = ControllerDelete