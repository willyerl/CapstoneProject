const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const users = mongoose.model("user", usersSchema);

module.exports = users;