import BaseService from "./base-service";
import CommentsModel from "../models/comments.model";

class CommentsService extends BaseService {
  model = CommentsModel;
}

module.exports = new CommentsService();
