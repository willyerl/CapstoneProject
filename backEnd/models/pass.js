const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// const Scheme = mongose.Scheme;

const recipesSchema = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        minlength: 6,
        trim: true
    },
});

recipesSchema.pre('save', async function (next){
    const user = this;
    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 5);
    }
    next()
});

const User = mongoose.model("users", recipesSchema);

module.exports = User;