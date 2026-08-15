const express = require('express');
const URL = require("./models/url")
const urlRoute = require('./routes/url')
const userRoute = require('./routes/user')
const app =express();
const PORT = 8000;
const {connectToMongoDb} = require('./connect')
const cookieParser = require('cookie-parser')
const {fetchAndStoreTheUser} = require('./middleware/auth')

connectToMongoDb("mongodb://127.0.0.1:27017/short-url").then(()=>{
    console.log("Connected to MongoDb");
})

app.listen(PORT,()=>{console.log("Server Started")})
app.use(express.json())
app.use(cookieParser())
app.use("/url",fetchAndStoreTheUser,urlRoute);
app.use("/user",userRoute);


app.get("/:shortId", async (req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
     shortId
    },{$push:{
        visitHistory:{
            timestamp : Date.now(),
            ipAddress : req.ip,
            userAgent : req.headers["user-agent"],
            referrer  : req.headers.referer || "Direct",
        }
    }
},
); 
// console.log(shortId);
// console.log(entry);

if(!entry){
    return res.status(404).json({
        error:"Short URL Not Found"
    })
}

    res.redirect(entry.redirectURL);
});

