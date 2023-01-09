
const fetch = require("node-fetch");

async function fullRecipe(id, res) {
    let ingredients = []
    
    if(id !== "undefined"){
        
    let recipes = 
    await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=ea79b9c31eda4feeb4a5976bfb1c3c6e&includeNutrition=false`)
    // await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=f290e9cc36c94b1fa0ae203e0f51e638&includeNutrition=false`)
    // await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=6b1f93497871425fa94f02b64771e1af&includeNutrition=false`)
    // await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=cd676049cb274e2ebefca3a8594e8d86&includeNutrition=false`)
    
    let data = await recipes.json()
    for(let i of data.extendedIngredients){
        ingredients.push('</br>- '+i.originalName)
        // console.log(i.originalName)
    }
    
    return {recipe: data,
        ingredients:  ingredients}
    }
    console.log('no id')
    return "no id"
}
module.exports = {
    fullRecipe
}
