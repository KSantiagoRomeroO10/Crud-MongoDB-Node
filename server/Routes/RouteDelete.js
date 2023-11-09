const express = require('express');
const router = express.Router();
const ControllerDelete = require('../Controllers/ControllerDelete');

router.delete('/delete/:id', ControllerDelete)

module.exports = router;
