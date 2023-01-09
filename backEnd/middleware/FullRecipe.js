
const fetch = require("node-fetch");

async function fullRecipe(id, res) {
    let ingredients = []
    
    if(id !== "undefined"){
        
    let recipes = 
    await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey="apiKey"&includeNutrition=false`)
    // await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey="apiKey"&includeNutrition=false`)
    // await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey="apiKey"&includeNutrition=false`)
    // await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey="apiKey"&includeNutrition=false`)
    
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
