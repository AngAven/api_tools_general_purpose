const express = require('express')
const fs = require('fs')

function productsAPI(app){
    const router = express.Router()
    app.use('/general_api', router)

    router.get('/', (req, res, next) => {
        res.status(200).json({mensaje: 'aqui mensaje'})
    })
}

module.exports = productsAPI