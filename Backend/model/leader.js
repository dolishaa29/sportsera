let mongo=require("mongoose");
let expertisemodel1= new mongo.Schema({
    name:{type:String},
    description:{type:String},
});

let leadermodel=mongo.Schema({
   email:{type:String},
   name:{type:String},
   password:{type:String},
   address:{type:String},
   contact:{type:Number},
   city:{type:String},
   interests:{type:String},
   expertise: [expertisemodel1],
   image:{type:String},

});
module.exports=mongo.model('leader',leadermodel);