const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'lägg till namn']
    },
    email: {
        type: String,
        required: [true, 'lägg till email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'lägg till lösenord']
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('User', userSchema)