import mongoose from 'mongoose';

const GenresSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required:true
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

const GenresModel = mongoose.model('Genre', GenresSchema);

module.exports = GenresModel;