const {nanoid} = require('nanoid')
const URL = require('../models/url')
async function genreateNewShortUrl(req,res){
    console.log(req.body.url);
    const body = req.body;
    if(!body.url){
        return res.status(400).json({error:" url is required"})
    }
    const shortId = nanoid(8);
    await URL.create({
        shortId : shortId,
        redirectURL : body.url,
        visitHistory: [],
    
    });

    return res.json({id:shortId})
}

async function analyticsViewer(req,res){

    console.log("anaylitcs method is calling")
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});

    return res.json({
        totalClicks:result.visitHistory.length,
        analytics: result.visitHistory,
        location : result.ipAddress,
        device : result.userAgent,
        referrer : result.referrer,
    })

}
module.exports = {
    genreateNewShortUrl,
    analyticsViewer

}