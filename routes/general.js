const express = require('express')

const PortfolioService = require('../services/portfolio')

function productsAPI(app){
    const router = express.Router()
    const portfolioService = new PortfolioService()

    app.use('/general_api', router)

    router.get('/', async (req, res, next) => {
        try {
            const portfolioData = await portfolioService.getPortfolioData()

            res.status(200).json({data: portfolioData})
        } catch (e) {
            res.status(200).json({error: e})
            next(e)
        }
    })
}

module.exports = productsAPI
