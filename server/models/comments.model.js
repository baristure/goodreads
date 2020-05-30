import mongoose from 'mongoose';

const CommentsSchema = new mongoose.Schema({
    book: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
}, {
    timeStamps: true
});
CommentsSchema.plugin(require('mongoose-autopopulate'))

const CommentsModel = mongoose.model('Book',CommentsSchema);

module.exports = CommentsModel;