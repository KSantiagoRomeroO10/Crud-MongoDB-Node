const express = require('express');
const router = express.Router();
const ControllerCreate = require('../Controllers/ControllerCreate');

router.post('/create', ControllerCreate)

module.exports = router;
