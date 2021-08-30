const MongoLib = require('../lib/mongo')

class PortfolioService {
  constructor(){
    this.collection = 'data'
    this.mongoDB = new MongoLib()
  }

  async getPortfolioData(){
    const portfolioData = await this.mongoDB.getAll(this.collection)
    return portfolioData || []
  }
}

module.exports = PortfolioService
