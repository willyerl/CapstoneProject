const mongoose = require("mongoose");
var data = require('./routes/dataRoutes');
const express = require('express')
const app = express()
const port = 3001
let cors = require("cors")  //stops browser error (npm install cors)
app.use(cors()) 
global.__basedir = __dirname;
// var corsOptions = {
//   origin: "http://localhost:8081"
// };
// app.use(cors(corsOptions));

const initRoutes = require("./routes/dataRoutes");

app.use(express.urlencoded({ extended: true }));
// initRoutes(app);

app.use('/',data)

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost:27017/capstone',
  {
    // useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})