import BaseService from './base-service';
import GenresModel from '../models/genres.model';
class GenresService extends BaseService {
    model= GenresModel
}

module.exports = new GenresService()