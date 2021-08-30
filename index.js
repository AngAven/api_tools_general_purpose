const express = require('express')
const coors = require('cors')

const { config } = require('./config/index')
const generalAPI = require('./routes/general')

const app = express()
let { PORT } = process.env

if (!PORT){
    console.log('Without enviroment variables -- default --> development, 3000')
    PORT = config.PORT ? config.PORT : 3000
}

app.use(coors())

app.use(express.json())

generalAPI(app)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`))
