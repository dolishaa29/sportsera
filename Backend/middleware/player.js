let playermodel=require("../model/player");
const jwt = require("jsonwebtoken");

async function auth(req, res, next) {
  try {
    if (req.cookies.emstoken != undefined && req.cookies.emstoken != "") {
      const token = req.cookies.emstoken;
      
      const data = jwt.verify(token, "aabb");
      let player= await playermodel.findOne({ email: data.token });
      
      if (!player) return res.status(403).json({ msg: "player not found" });
      else{
      req.player = player;
      next();
      }
    } else {
      console.log("Please Login First");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Internal Server Error",
      message: err.message,
    });
  }
}

module.exports = auth;
