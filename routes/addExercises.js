var express = require('express');
const  {AddExercises} = require('../models');
const Sequelize = require('sequelize');
const bycrypt = require('bcrypt')
const app = require('../app');
const jwt = require('jsonwebtoken');
const { token } = require('morgan');
require('dotenv').config();
const Op = Sequelize.Op
var router = express.Router();




router.post('/',(req,res,next)=>{

    console.log(req.body.name);
    console.log(req.body.duration);
    console.log(req.body.filename);
    console.log(req.body.videoname);
    
    AddExercises.create({
    
        name: req.body.name,
        duration: req.body.days,
        filename: req.body.filename,
        videoname: req.body.videoname
      
      }).then(exercises=>{
          console.log("exercises Successfully created")    
      })
      .catch(err=>{res.status(300).send({message:err.message})})     

})



module.exports = router;