const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 5,
        maxLength: 12
    }
}, {
    timeStamps: true
});

const User = mongoose.model('User',userSchema);

module.exports = User;