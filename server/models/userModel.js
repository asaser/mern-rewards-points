const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    surname: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    money: {
        type: Number,
        required: false,
        trim: true,
        default: 0
    },
    date: {
        type: Date,
        required: true,
        trim: true,
    },
}, {
    // auto create createAt and updateAt
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;