const mongoose = require("mongoose");

const recipesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        
       
    },
    id: {
        type: String,
        required: true,
        
        
    },
    image: {
        type: String,
        required: true,
        
    },
    imageType: {
        type: String,
        required: true,
        
    },
    recipe: {
        type: String,
        required: true,
        
    },
    shared: {
        type: String,
        required: true,
    },
    Ingredients: {
        type: String,
        required: true,
    },
    formUser: {
        type: String,
        require: false,
    }
});

const recipes = mongoose.model("popularRecipes", recipesSchema);

module.exports = recipes;