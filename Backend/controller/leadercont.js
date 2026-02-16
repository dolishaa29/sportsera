const { leaderregister, leaderlogin, leaderupdate } = require("../service/leaderservice")

exports.leaderregister=async (req,res)=>
{
    await leaderregister(req,res);
}

exports.leaderlogin=async (req,res)=>
{
    await leaderlogin(req,res);
}

exports.leaderprofile=async (req,res)=>
{
    await leaderprofile(req,res);
}

exports.leaderupdate=async (req,res)=>
{
    await leaderupdate(req,res);
}
