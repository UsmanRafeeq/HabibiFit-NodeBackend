var express = require('express');
const  {User} = require('../models');
const Sequelize = require('sequelize');
const bycrypt = require('bcrypt')
const app = require('../app');
const jwt = require('jsonwebtoken');
const { token } = require('morgan');
require('dotenv').config();
const Op = Sequelize.Op
var router = express.Router();


/*

const checkUserName = ((req, res, next) => {
  console.log(req.body.name);
  User.findOne({
    where:{
      userName: req.body.name
    }
    
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already in use!"
      });
      return;
    }
    next();   
})

})
 //GET users listing. 
 


router.post('/',checkUserName, async (req, res, next)=>{

  console.log("Enter into Post ");
  console.log(req.body.name)
  try{
    const salt = await bycrypt.genSalt();

    const hashpassword = await bycrypt.hash(req.body.password, 10)
    
    User.create({
      userName: req.body.name,
      password: hashpassword
    })
      .then("Successfully inserted..")
      .catch(err=>{res.status(300).send({message:err.message})})
      console.log('inserted');
      const user = {name: req.body.name};
      const token = jwt.sign(user, process.env.JWTTOKEN)
      res.header('auth-token', token).send(token);    
}
catch{
    res.status(500).send() 
}

})
*/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', (req,res,next)=>{
  console.log(req.body.name);
  console.log(req.body.password);

  User.findOne({
    where: {
      userName: req.body.name
    }
  }).then(user => {
    if (!user) return res.status(404).send({ message: "User Not found." });
    try{
      if(bycrypt.compareSync(req.body.password, user.password)){
      console.log("success");
      
      const user = req.body.name;

      console.log(user);

     const token = jwt.sign(user, "my_secret_key");

      //res.header('auth-token').send(token);

      res.send({token: token});
     //res.send(user);
      }
      else{
        console.log("failedd")
        res.send("Not Allowed")
      }  
}
catch{
   res.status(500).send() 
}
})
})


function auth (req, res, next){

const token =req.header('auth-token');
if(!token) return res.status(401).send('Access Denied');

try{

  console.log("Hello Usman")

  const verified = jwt.verify(token, "my_secret_key")
  req.user = verified
}
catch{
  res.status('400').send('Invalid token');
}

}





function authenticateToken(req, res, next){

const authHeader = req.headers['authorization']
const token = authHeader && authHeader.split(' ')[1]
if (token == null) return res.sendStatus(401)

jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err, user)=>{
  if (err) return res.sendStatus(403)
  
  req.user =user
  next()
})

}


module.exports = router;
