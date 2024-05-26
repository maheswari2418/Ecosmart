const mongoose=require('mongoose');
let User=new mongoose.Schema({
  name:{
    type:String,
    require:true,
    unique:true
  },
  email:{
    type:String,
    require:true,
  },
  password:{
    type:String,
    require:true
  },
  confirmpassword:{
    type:String,
    require:true,
  }
})
module.exports=mongoose.model('User',User)