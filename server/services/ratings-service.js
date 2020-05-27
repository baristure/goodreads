import BaseService from './base-service';
import RatingsModel from '../models/ratings.model';
class RatingsService extends BaseService {
    model= RatingsModel
}

module.exports = new RatingsService()