var express = require('express');
const  {AddProgrames} = require('../models');
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
    console.log(req.body.days);
    console.log(req.body.type);
    console.log(req.body.desc);
    console.log(req.body.filename);
    AddProgrames.create({
    
        name: req.body.name,
        days: req.body.days,
        types: req.body.type,
        description: req.body.desc,
        filename:req.body.filename
      }).then(programe=>{
          console.log("programe Successfully created")    
      })
      .catch(err=>{res.status(300).send({message:err.message})})

      

})


router.get('/', async(req, res,next)=>{

    const addprog = await AddProgrames.findAll();
    console.log(addprog);
    res.send(addprog);
})


module.exports = router;