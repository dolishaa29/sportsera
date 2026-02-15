const { playerregister, playerlogin, playerprofile, playerupdate } = require("../service/playerservice")

exports.playerregister=async (req,res)=>
{
    await playerregister(req,res);
}

exports.playerlogin=async (req,res)=>
{
    await playerlogin(req,res);
}

exports.playerprofile=async(req,res)=>
{
    await playerprofile(req,res);
}
exports.playerupdate=async(req,res)=>
{
    await playerupdate(req,res);
}