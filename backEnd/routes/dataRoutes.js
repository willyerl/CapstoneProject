var express = require('express');
var data = require('../controllers/dataController.js');
var image = require('../controllers/imageController')
const users = require('../controllers/user.js');
var router = express.Router();
// const User = require('../models/pass.js')


router.post("/upload", data.upload);
router.get("/files/:name", data.download);


router.get('/recipesPopular', (req, res) => {
    data.Popular(req, res)
})
router.get('/savedRecipes', (req, res) => {
    data.Saved(req, res)
})
router.get('/myRecipes', (req, res) => {
    data.MyRecipes(req, res)
})
router.get('/getRecipes', (req, res) => {
    data.GetRecipes(req, res)
})
router.get('/getFullRecipes', (req, res) => {
    data.GetFullRecipes(req, res)
})
router.post('/newRecipe', async (req, res) =>{ 
    data.NewRecipe(req.query.user, req.query.title, req.query.recipe, req.query.ingrediente, req.query.imagePath, res)
})

router.post('/addRecipes', (req, res) => {
    data.AddRecipes(req.query.user, req.query.title, req.query.id, req.query.image, res)
})
router.get('/User', async (req, res) => {
 
    let response = await users.addUser(req.query.name, req.query.email, req.query.password);
    console.log(response)
    res.send([response])
 
})
router.get('/checkUser', async (req, res) => {
    let response = await users.checkUser(req.query.name, req.query.password)
    res.send([response])
})

router.delete('/deletOne', (req, res) => {  
    data.controdeleOne  (req.query.user, req.query.id, res) 
})


module.exports = router;