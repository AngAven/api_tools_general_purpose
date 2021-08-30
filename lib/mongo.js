const { MongoClient, ObjectId } = require('mongodb')
const { config } = require('../config')
const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME_PORTFOLIO = encodeURIComponent(config.dbNamePortfolio)
const MONGO_URI_PORTFOLIO = `mongodb://${config.dbHost}:${config.dbPort}/${config.dbNamePortfolio}`

  class MongoLib {
    constructor() {
        this.client = new MongoClient(MONGO_URI_PORTFOLIO, { useNewUrlParser: true, useUnifiedTopology: true })
        this.dbName = DB_NAME_PORTFOLIO
    }

    connect() {
        if (!MongoLib.connection) {
          MongoLib.connection = new Promise((resolve, reject) => {
            this.client.connect(err => {
              if (err) {
                reject(err)
              }

              console.log('<---------- URL MONGO', MONGO_URI_PORTFOLIO, ' ---------->')
              resolve(this.client.db(this.dbName))
            })

          })
        }

        return MongoLib.connection
    }

    getAll(collection){
      return this.connect().then(db => {
        console.log('db => ', db)
        return db.collection(collection).find().toArray()
      })
    }
  }

  module.exports = MongoLib
