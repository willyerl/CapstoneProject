
const fetch = require("node-fetch");

async function Recipe(cuisine, diet, intolerances, type, res) {
    
    let recipes = 
    await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey="apiKey"&cuisine=${cuisine}&diet=${diet}&intolerances=${intolerances}&type=${type}&instructionsRequired=true&addRecipeNutrition=false&number=8`)
    // await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey="apiKey"&cuisine=${cuisine}&diet=${diet}&intolerances=${intolerances}&type=${type}&instructionsRequired=true&addRecipeNutrition=false&number=8`)
    // await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey="apiKey"&cuisine=${cuisine}&diet=${diet}&intolerances=${intolerances}&type=${type}&instructionsRequired=true&addRecipeNutrition=false&number=8`)
    // await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey="apiKey"&cuisine=${cuisine}&diet=${diet}&intolerances=${intolerances}&type=${type}&instructionsRequired=true&addRecipeNutrition=false&number=8`)
    
    let data = await recipes.json()

 console.log(data.results)
    return data.results
}
module.exports = {
    Recipe
}
