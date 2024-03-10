const express = require("express");
const userApp = express.Router();
const bcrypt = require("bcryptjs")

userApp.use((req,res,next)=>{
  usersCollection=req.app.get('usersCollection')
  next()
})

userApp.post('/login', async(req, res)=>{
  const user = req.body;
  let dbuser = await usersCollection.findOne({username:user.username})
  if(dbuser !== null){
    let status= await bcrypt.compare(user.password,dbUser.password)
     if(status=== false){
        res.send({message:"wrong pass"})
     }else{
      
     }
  }
});
module.exports= userApp;