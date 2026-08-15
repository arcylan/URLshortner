const {getUser} = require('../service/auth')
async function fetchAndStoreTheUser(req,res,next){

   const uid =  req.cookies?.uid;
   if(!uid){
    return res.status(404).json({
        message:"login first"
    })
   }
   const user = getUser(uid);
   if(!user){
    return res.status(404).json({
        message:"user not found"
    })
   }
   req.user = user;
   next();
}

module.exports = {
    fetchAndStoreTheUser,
}