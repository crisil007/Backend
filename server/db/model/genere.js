const mongoose=require('mongoose')
const genereSchema=new mongoose.Schema({
genere:String

})
module.exports=mongoose.model("genere",genereSchema)