let rec=require("../model/leader");
let jwt=require("jsonwebtoken");
let bct=require("bcrypt");

exports.leaderregister=async(req,res)=>
{
  console.log("req", req.body);
  let email = req.body.email;
  let name = req.body.name;
  let password = req.body.password;
  let contact = req.body.contact;
  let address = req.body.address;
  let city = req.body.city;
  let expertise = req.body.expertise;
  let interests = req.body.interests;
  let image = req.file.filename;

  console.log("req.file---",req.file.filename);
  
  let hp = await bct.hash(password, 10);
  let exist = await rec.findOne({ email: email });
  if (exist) {
    return res.status(400).json({ success: false, msg: "leader already exist" });
  } else {
    let data = await rec.find();
    
    if (data.length == 0) {
      let record = new rec({
        email: email,
        password: hp,
        contact: contact,
        name: name,
        address: address,
        city: city,
        expertise: expertise,
        interests: interests,
        image: image,

      });
      await record.save();
      return res
        .status(201)
        .json({ success: true, msg: "leader registered successfully" });
    } else {
      let record = new rec({
        email: email,
        password: hp,
        contact: contact,
        name: name,
        address: address,
        city: city,
        expertise: expertise,
        interests: interests,
        image: image,
      });
      await record.save();
      return res
        .status(201)
        .json({ success: true, msg: "leader registered successfully" });
    }
  }
}
exports.leaderlogin=async(req,res)=>
{
  let email = req.body.email;
  let password = req.body.password;
  console.log("email",email);
  console.log("password",password);
  let data = await rec.findOne({ email: email });
  if (!data) {
    return res.status(404).json({ success: false, msg: "leader not found" });
  }
  lpass = data.password;
  pass = await bct.compare(password, lpass);
  console.log(pass);
  if (pass) {
    
    let token=jwt.sign({token:data.email},"aabb",{
        expiresIn:"1d"
    });

    res.cookie('emtoken', token);
    console.log("send token"+token);
    return res
      .status(200)
      .json({ success: true, msg: "leader login successfully",token:token});
  } else {
    return res.status(400).json({ success: false, msg: "leader login failed" });
  } 
}