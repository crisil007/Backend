const mongoose =require('mongoose');
const user=new mongoose.Schema({

title:{
    type:String,
    required:true,
},
language:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"language",

},
genere:{
type:mongoose.Schema.Types.ObjectId,
ref:"genere"
},

})
module.exports=mongoose.model("user",user);
