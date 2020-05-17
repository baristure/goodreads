const mongoose = require('mongoose');

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
    }
}, {
    timeStamps: true
});
BookSchema.plugin(require('mongoose-autopopulate'))

const BookModel = mongoose.model('Book',BookSchema);

module.exports = BookModel;