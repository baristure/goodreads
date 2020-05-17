const BaseService = require('./base-service')
const GenresModel = require('../models/genres.model')

class GenresService extends BaseService {
    model= GenresModel
}

module.exports = new GenresService()