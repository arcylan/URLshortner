const user = require('../models/user');
const {v4:uuidv4} = require('uuid');
const{setUser,getUser} = require('../service/auth')
const URL = require('../models/url')

async function registration(req,res){
 const {name,email,password} = req.body;
 
 const newUser = await user.create({
    name,email,password,
})

return res.status(201).json({
    message: " registration Successful"
})}


async function login(req,res){
const {name,password} = req.body;

const loginUser = await user.findOne({
    name,password,
})

if(!loginUser){
    return res.status(404).json({
      message:"User Not Found!"
    })
}

const token = setUser(loginUser);
res.cookie("uid",token);
//console.log(sessionId);

const data = await URL.find({
    createdBy : loginUser._id
})


return res.status(201).json({
    message:`login succesfull as ${name} and token ${token}`,
    Urls : data
})
}
module.exports={
    registration,
    login,
}