const BaseService = require('./base-service')
const RatingsModel = require('../models/ratings.model')

class RatingsService extends BaseService {
    model= RatingsModel
}

module.exports = new RatingsService()