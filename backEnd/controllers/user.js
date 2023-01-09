const User = require('../models/pass.js')
var bcrypt = require('bcryptjs');
const { response } = require('express');
async function addUser(nameSub, emailSub, password, res) {
    
    const user = await User.find()
    
    for (let i of user) {
       
        if (i.name === nameSub) {

            return "name already registered"
        }
        else if (i.email === emailSub) {
            return "email already registered"
        }
        else if (password.length < 6 ){
            return "Password must be at least 6 characters long"
        }
        else {
            User.create([{
                name: nameSub,
                email: emailSub,
                password: password
            }
            ]).then(function () {
                console.log("Data inserted")  // Success
                return ('test')
            }).catch(function (error) {
                console.log(error)
                let err = error    // Failure
                return err
            })
            return 1234
            
        }
    }


}

async function checkUser(nameGet, pass, res) {
    console.log(pass)
    const user = await User.find()
    for (let i of user) {
        console.log(i.password)
        
        if (i.name === nameGet) {
            const resp = await bcrypt.compare(pass, i.password)
            console.log(resp)
            if (resp) {
                // console.log(i.name)
                return ([resp])


            }
        }
    }
    // const result =  await bcrypt.compare(pass, user[0].password)    
    // console.log(result)
}


module.exports = { addUser, checkUser }