let mongo=require("mongoose");
let expertisemodel2= new mongo.Schema({
    name:{type:String},
    description:{type:String},
});

let playermodel=mongo.Schema({
   email:{type:String,unique:true},
   name:{type:String},
   password:{type:String},
   address:{type:String},
   contact:{type:Number},
   city:{type:String},
   interests:{type:String},
   expertise:[expertisemodel2],

});
module.exports=mongo.model('player',playermodel);