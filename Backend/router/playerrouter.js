let express=require("express");
let router=express.Router();
let auth=require("../middleware/player");
const { playerregister, playerlogin, playerprofile, playerupdate } = require("../controller/playercont");

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

router.post("/playerregister",playerregister);
router.post("/playerlogin",playerlogin);
router.get("/playerprofile",auth,playerprofile);
router.put("/playerupdate",auth,playerupdate);
module.exports=router;