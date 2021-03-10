
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



router.delete('/:id', async (req,res)=>{

  var id= req.params.id;
    console.log("Hello ji" + id);
   await AddProgrames.destroy({
    where: {id: id}   
    }) 
})


module.exports = router;