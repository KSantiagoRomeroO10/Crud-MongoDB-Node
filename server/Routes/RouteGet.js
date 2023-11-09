const express = require('express');
const router = express.Router();
const ControllerGet = require('../Controllers/ControllerGet');

router.get('/get', ControllerGet)

module.exports = router;
