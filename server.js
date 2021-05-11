const express = require('express'); 
const mongoose =require('mongoose')
const jwt = require('jsonwebtoken')
const dotenv=require('dotenv').config('./.env')
const web = require('./Route/web')
const app= express();


// Configuring DataBase
mongoose.connect(process.env.DBurl,{useNewUrlParser:true , useUnifiedTopology:true})
.then( data=> console.log("DataBase Connected"))
.catch(err => console.log(err))



app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(web)


const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=> console.log(`SERVER RUNNING ON PORT : ${PORT}`));