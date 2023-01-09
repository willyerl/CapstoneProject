
const fetch = require("node-fetch");

async function Recipe(cuisine, diet, intolerances, type, res) {
    
    let recipes = 
    await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ea79b9c31eda4feeb4a5976bfb1c3c6e&cuisine=${cuisine}&diet=${diet}&intolerances=${intolerances}&type=${type}&instructionsRequired=true&addRecipeNutrition=false&number=8`)
    // await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f290e9cc36c94b1fa0ae203e0f51e638&cuisine=${cuisine}&diet=${diet}&intolerances=${intolerances}&type=${type}&instructionsRequired=true&addRecipeNutrition=false&number=8`)
    // await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=6b1f93497871425fa94f02b64771e1af&cuisine=${cuisine}&diet=${diet}&intolerances=${intolerances}&type=${type}&instructionsRequired=true&addRecipeNutrition=false&number=8`)
    // await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=cd676049cb274e2ebefca3a8594e8d86&cuisine=${cuisine}&diet=${diet}&intolerances=${intolerances}&type=${type}&instructionsRequired=true&addRecipeNutrition=false&number=8`)
    
    let data = await recipes.json()

 console.log(data.results)
    return data.results
}
module.exports = {
    Recipe
}