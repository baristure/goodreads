import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    img: {
        type: String,
        required: true,
        trim: true
    },
    genre:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Genre',
        required:true,
    },
    created_at:{
        type:Date,
        required:true
    }
});
BookSchema.plugin(require('mongoose-autopopulate'))

const BookModel = mongoose.model('Book',BookSchema);

module.exports = BookModel;