const express = require('express')
const router = express.Router()

const RouteCreate = require('./RouteCreate')
const RouteGet = require('./RouteGet')
const RouteDelete = require('./RouteDelete')

router.use('/player', RouteCreate) // http://localhost:3000/player/create
router.use('/player', RouteGet) // http://localhost:3000/player/get
router.use('/player', RouteDelete) // http://localhost:3000/player/delete/:id

module.exports = router
