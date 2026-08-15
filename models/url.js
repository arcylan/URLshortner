const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    shortId:{
        type:String,
        required: true,
        unique:true,
    },
    redirectURL:{
        type:String,
        required: true,
    },
    visitHistory:[{
        timestamp:{type:Number},
        ipAddress:{type:String},
        userAgent:{type:String},
        referrer :{type:String},
    }],
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
    },
    {
        timestamp:true,
    }
);

const URL = mongoose.model('url',urlSchema);

module.exports = URL;