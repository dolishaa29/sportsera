let mongo=require("mongoose");
exports.sportsera=()=>
{
mongo.connect("mongodb://localhost:27017/sportsera")
console.log('successfully connected')
}