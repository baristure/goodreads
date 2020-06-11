import mongoose from 'mongoose';

const RatingsSchema = new mongoose.Schema({
    bookId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Book',
        required:true,
        autopopulate: true
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required:true,
        autopopulate: true
    },
    rating: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});
RatingsSchema.plugin(require('mongoose-autopopulate'))

const RatingsModel = mongoose.model('Rating', RatingsSchema);

module.exports = RatingsModel;