const BaseService = require('./base-service')
const UserModel = require('../models/user.model')

class UserService extends BaseService{
    model = UserModel
}