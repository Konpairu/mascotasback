const express = require('express');
const router = express.Router();
const petsController = require('../controllers/pets.controller')

router
.get('/', petsController.get)
.get('/:id', petsController.getById)
.get('/owner/:owner_id', petsController.getByOwnerId)
.post('/', petsController.create);

module.exports = router;