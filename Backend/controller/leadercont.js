const { leaderregister, leaderlogin } = require("../service/leaderservice")

exports.leaderregister=async (req,res)=>
{
    await leaderregister(req,res);
}

exports.leaderlogin=async (req,res)=>
{
    await leaderlogin(req,res);
}