const popularRecipes = require('../models/popularModels')
const myRecipesModel = require('../models/modelsMy.js')
const getRecipes = require('../middleware/getRecipes.js')
const getFullRecipes = require('../middleware/FullRecipe.js')
const toBase = require('../models/imagesModel.js')
const uploadFile = require("../middleware/upload");
const fs = require('fs');
const baseUrl = "/Users/WillyErlemann/Documents/coding/Capstone-Project/backEnd/images/";

async function Popular(req, res) {
    let recipes = []
    const user = await myRecipesModel.find()
    try {
        for (let l in user) {
            recipes.push(user[l].id)
        }
        const getFrequency = (array) => {
            const map = {};
            array.forEach(item => {
                if (map[item]) {
                    map[item]++;
                } else {
                    map[item] = 1;
                }
            });
            return map;
        };
        var total = new Map()
        total = getFrequency(recipes);

        //  console.log(total)
    } catch (err) {
        res.status(500).send(err)
    }
    let sortable = [];
    for (var id in total) {
        sortable.push([id, total[id]]);
    }
    sortable.sort(function (a, b) {
        return b[1] - a[1];
    });
    popularRecipes.deleteMany().then(function () {
        console.log("Data deleted"); // Success
    }).catch(function (error) {
        console.log(error); // Failure
    });
    // console.log(sortable[1])
    for (let t = 0; t < 8; t++) {
        let now = sortable[t]
        // console.log(sortable[t])
        const resp = await myRecipesModel.find({ "id": now[0] })
        const user = resp[0]

        
        // console.log(user)
        if (user.formUser == '') {
            try {

                await popularRecipes.create([{
                    title: user.title,
                    id: user.id,
                    image: user.image,
                    imageType: 'jpg',
                    recipe: user.recipe,
                    shared: now[1],
                    Ingredients: user.Ingredients
                }
                ]).then(function () {
                    console.log("Data inserted")  // Success
                    return ('test')
                }).catch(function (error) {
                    console.log(error)
                    let err = error    // Failure
                    return err
                })

            } catch (err) {
                res.status(500).send(err)
            }
        }
        else {
            try {

                await popularRecipes.create([{
                    title: user.title,
                    id: user.id,
                    image: user.image,
                    imageType: 'jpg',
                    recipe: user.recipe,
                    shared: now[1],
                    Ingredients: user.Ingredients,
                    formUser: user.formUser
                }
                ]).then(function () {
                    console.log("Data inserted")  // Success
                    return ('test')
                }).catch(function (error) {
                    console.log(error)
                    let err = error    // Failure
                    return err
                })

            } catch (err) {
                res.status(500).send(err)
            }

        }
        // console.log(sortable)

    }
    let populares = []
    const resp = await popularRecipes.find()

    try {
        populares.push(resp)
    } catch (err) {
        res.status(500).send(err)
    }
    res.send(populares)
    // return recipes
}
async function MyRecipes(req, res) {
    let recipes = []
    let name = req.query.user
    // console.log(name)
    const user = await myRecipesModel.find({ "User": name })
    try {
        recipes.push(user)
        // console.log(user)
    } catch (err) {
        res.status(500).send(err)
    }
    res.send([recipes])
}

async function GetRecipes(req, res) {
    let recipes = []
    const user = await getRecipes.Recipe(req.query.cuisine, req.query.diet, req.query.intolerances, req.query.type, res)
    try {
        recipes.push(user)
    } catch (err) {
        res.status(500).send(err)
    }
    res.send([recipes])

}
async function GetFullRecipes(req, res) {
    let recipes = []
    let ingre = []
    const user = await getFullRecipes.fullRecipe(req.query.id, res)
    try {

        if (user.instructions) {
            recipes.push(user.recipe.instructions)
        }
        else {
            recipes.push(user.recipe.summary)
        }
        ingre.push(user.ingredients)
    } catch (err) {
        res.status(500).send(err)
    }
    res.send({
        recipe: recipes,
        ingredients: ingre
    })

}



async function AddRecipes(user, title, id, image, res) {
    const check = await myRecipesModel.find({ "User": user, "id": id })
    const respo = []
    // console.log(respo)

    if (check == '') {
        // console.log(check)
        const add = await myRecipesModel.find({ "id": id })
        let recipes = []
        let ingred = []
        let formUse = []
        if (add!= false){
            if (add[0].formUser === 'true') {
                let result = await myRecipesModel.create([{
                    User: user,
                    title: add[0].title,
                    id: add[0].id,
                    image: add[0].image,
                    imageType: 'jpg',
                    recipe: add[0].recipe,
                    Ingredients: add[0].Ingredients,
                    formUser: 'true'

                }
                ]).then(function () {
                    respo.push("data inserted")
                    console.log("Data inserted")  // Success
                    res.send(respo)
                    return (respo)
                }).catch(function (error) {
                    console.log(error)
                    let err = error    // Failure
                    return err
                })
            }else{
                let result = await myRecipesModel.create([{
                    User: user,
                    title: add[0].title,
                    id: add[0].id,
                    image: add[0].image,
                    imageType: 'jpg',
                    recipe: add[0].recipe,
                    Ingredients: add[0].Ingredients,
                    formUser: 'false'

                }
                ]).then(function () {
                    respo.push("data inserted")
                    console.log("Data inserted")  // Success
                    res.send(respo)
                    return (respo)
                }).catch(function (error) {
                    console.log(error)
                    let err = error    // Failure
                    return err
                })
            }
        }
        else {

            const data = await getFullRecipes.fullRecipe(id, res)
            ingred = data.ingredients.toString()
            try {

                if (data.recipe.instructions) {
                    await recipes.push(JSON.stringify(data.recipe.instructions))

                    // res.send(recipes)
                }
                else if (data.recipe.summary) {
                    await recipes.push(JSON.stringify(data.recipe.summary))

                    // res.send(recipes)
                }
                else {

                    recipes.push('no recipe for this meal')
                }

            } catch (err) {
                res.status(500).send(err)
            }


            let result = await myRecipesModel.create([{
                User: user,
                title: title,
                id: id,
                image: image,
                imageType: 'jpg',
                recipe: recipes[0],
                Ingredients: ingred,
                formUser: 'false'

            }
            ]).then(function () {
                respo.push("data inserted")
                console.log("Data inserted")  // Success
                res.send(respo)
                return (respo)
            }).catch(function (error) {
                console.log(error)
                let err = error    // Failure
                return err
            })
        }
    }
    else {
        respo.push('this recipe is aread in your book')

        console.log('this recipe is aread in your book')
        res.send(respo)
        return respo
    }

}



async function Saved(req, res) {
    let recipes = []
    const user = await myRecipesModel.find()

    try {
        for (let l in user) {
            recipes.push(user[l].id)

        }
        const getFrequency = (array) => {
            const map = {};
            array.forEach(item => {
                if (map[item]) {
                    map[item]++;
                } else {
                    map[item] = 1;
                }
            });
            return map;
        };
        var total = new Map()
        total = getFrequency(recipes);

        //  console.log(total)
    } catch (err) {
        res.status(500).send(err)
    }
    let sortable = [];
    for (var id in total) {

        sortable.push([id, total[id]]);
    }

    sortable.sort(function (a, b) {
        return b[1] - a[1];
    });
    let registe = []
    for (let i = 0; i < sortable.length; i++) {

        let id = sortable[i]
        // console.log(id[0])
        const resp = await myRecipesModel.find({ "id": id[0] })
        registe.push(resp[0])

    }
    // console.log(registe)
    res.send([registe])
}

const upload = async (req, res) => {
    try {
        await uploadFile(req, res);

        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }
        // console.log(req)
        res.status(200).send({

            message: "Uploaded the file successfully: " + req.file,
        });
    } catch (err) {
        res.status(500).send({
            message: `Could not upload the file: ${req.file}. ${err}`,
        });
    }
};



const download = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = __basedir + "/images/";

    res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
            res.status(500).send({
                message: "Could not download the file. " + err,
            });
        }
    });
};
async function NewRecipe(user, title, recipe, ingrediente, imagePath, res) {
    let ingr = ingrediente.split(',')
    let ingredientList = []
    for(let i in ingr){
       ingredientList.push('<br/>- '+ ingr[i])
    }
    let List = ingredientList.toString()
    
    let respo = []
    let result = await myRecipesModel.create([{
        User: user,
        title: title,
        id: Math.floor(Math.random() * 20000),
        image: imagePath,
        imageType: 'jpg',
        recipe: recipe,
        Ingredients: List,
        formUser: 'true'
    }
    ]).then(function () {
        respo.push("data inserted")
        console.log("Data inserted")  // Success
        res.send(respo)
        return ('test')
    }).catch(function (error) {
        console.log(error)
        let err = error    // Failure
        return err
    })
}

async function controdeleOne(user ,id, res){
    await myRecipesModel.deleteOne({ "User": user, "id": id }).then(function () {
        console.log("Data deleted"); // Success
    }).catch(function (error) {
        console.log(error); // Failure
    });

}


module.exports = { Popular, MyRecipes, GetRecipes, GetFullRecipes, AddRecipes, Saved, upload, download, NewRecipe, controdeleOne }