const mongoose=require('mongoose')
const schema=mongoose.Schema({
    name:{
        type:String,
        require:[true,"Course must be provided"],
    },
    price:{
        type:Number,
        require:[true,"Price must be provided"]
    },
    duration:{
        type:String,
        require:true
    },
    rating:{
        type:Number,
        require:false,
        default:0
    },
    category:{
        type:String,
        require:[true,"Category must be provided"]
    }
})

// First argument must be singular. In database, it will become plural.
module.exports=mongoose.model("Course",schema);