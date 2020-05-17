const BaseService = require('./base-service')
const CommentsModel = require('../models/comments.model')

class CommentsService extends BaseService {
    model= CommentsModel
}

module.exports = new CommentsService()