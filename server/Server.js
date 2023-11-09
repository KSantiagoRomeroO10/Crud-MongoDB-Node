const express = require('express');
const server = express();

const mongoose = require('mongoose')

const cors = require('cors');

const router = require('./Routes/Index');

const uri = 'mongodb://127.0.0.1:27017/futbol_colombiano'

mongoose.connect(uri)
.then(() => {
  console.log('Conexión exitósa en la base de datos')
})
.catch((error) => console.error(error))

const PORT = 3000;

server.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'DELETE', 'PUT']
}));

server.use(express.json());
server.use(router);

server.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
