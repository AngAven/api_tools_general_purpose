const { MongoClient, ObjectId } = require('mongodb')
const { config } = require('../config')
const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const DB_NAME = (config.dbLocal === 'true')
  ? encodeURIComponent(config.dbNameLocal)
  : encodeURIComponent(config.dbName)
const MONGO_URI = (config.dbLocal === 'true')
  ? `mongodb://${config.dbHostLocal}:${config.dbPort}/${config.dbNameLocal}`
  : `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`

  class MongoLib {
    constructor() {
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        this.dbName = DB_NAME
    }

    connect() {
        if (!MongoLib.connection) {
          MongoLib.connection = new Promise((resolve, reject) => {
            this.client.connect(err => {
              if (err) {
                reject(err)
              }

              console.log('<---------- URL MONGO', MONGO_URI, ' ---------->')
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
