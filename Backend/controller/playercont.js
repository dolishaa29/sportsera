const { playerregister, playerlogin } = require("../service/playerservice")

exports.playerregister=async (req,res)=>
{
    await playerregister(req,res);
}

exports.playerlogin=async (req,res)=>
{
    await playerlogin(req,res);
}