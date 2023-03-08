const express = require('express');

const ownersRouter = require('./owners.router')
const petsRouter = require('./pets.router')

function routerApi(app){
    const router = express.Router();
    app.use('/api', router);
    router.use('/owners',ownersRouter);
    router.use('/pets',petsRouter);
}

module.exports = routerApi;