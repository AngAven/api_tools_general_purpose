require('dotenv').config()

const config = {
    dbport: process.env.PORT,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbNamePortfolio: process.env.DB_NAME_PORTFOLIO,
    dbPort: process.env.DB_PORT,
  }

module.exports = { config }
