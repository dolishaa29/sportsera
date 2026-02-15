let express=require("express");
let router=express.Router();
let auth=require("../middleware/leader");
const { leaderregister, leaderlogin, leaderprofile } = require("../controller/leadercont");

const multer = require("multer");
let upload =multer({ 
    storage:multer.diskStorage({
        destination:(req, file, cb)=>{
            cb(null,"./public/images");
        },
        filename:(req,file,cb)=>{
            cb(null, file.originalname);
        }
    })
})

router.post("/leaderregister",leaderregister);
router.post("/leaderlogin",leaderlogin);
router.get("/leaderprofile",auth,leaderprofile);
router.put("/leaderupdate",auth,leaderupdate);

module.exports=router;