let express=require("express");
let router=express.Router();
let auth=require("../middleware/leader");
const { leaderregister, leaderlogin } = require("../controller/leadercont");

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

router.post("/leaderregister",upload.single("image"),leaderregister);
router.post("/leaderlogin",leaderlogin);

module.exports=router;