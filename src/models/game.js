const mongoose = require("mongoose")

let GameSchema = mongoose.Schema({
    name:{
        type:String,
        index:{unique:true}
    },
    categories:[String],
    answers:[],
})

module.exports=mongoose.model("Game",GameSchema)