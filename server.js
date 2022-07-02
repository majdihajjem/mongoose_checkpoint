const express = require('express')
const app = express()
const mongoose = require('mongoose')
//connexion avec la base des donnes
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    err ? console.log(err) : console.log("database is connected")
});


const port = 5000
app.listen(port,(err) => {
    err ? console.log(err) :console.log("server is running on port " + port)
})