const mongoose = require('mongoose');

const fileModel =mongoose.Schema(
    {
        
        originalname:{
            type:String,
            required:true
        },
        mimetype:{
            type:String,
            required:true
        },
        destination:{
            type:String,
            required:true
        },
        filename:{
            type:String,
            required:true
        },
        path:{
            type:String,
            required:true
        },
        size:{
            type:Number,
            required:true
        }
    },{
        collection:"files",
        timestamps:true
});

module.exports = mongoose.model("FileModel",fileModel);