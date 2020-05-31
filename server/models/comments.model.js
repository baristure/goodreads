import mongoose from 'mongoose';

const CommentsSchema = new mongoose.Schema({
    book: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Book',
        required:true,
        autopopulate: true
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required:true,
        autopopulate: true
    },
    content: {
        type: String,
        required: true,
        maxlength: [500, 'Comment can not exceed 500 characters']
    },
    status: {
        type: Boolean,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});
CommentsSchema.plugin(require('mongoose-autopopulate'))

const CommentsModel = mongoose.model('Comment', CommentsSchema);

module.exports = CommentsModel;