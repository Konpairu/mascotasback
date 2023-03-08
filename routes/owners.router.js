const express = require('express');
const router = express.Router();
const ownersController = require('../controllers/owners.controller')

router
.get('/', ownersController.get)
.get('/:id', ownersController.getById)
.post('/', ownersController.create);

module.exports = router;