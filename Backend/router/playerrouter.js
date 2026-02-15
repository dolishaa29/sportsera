let express=require("express");
let router=express.Router();
let auth=require("../middleware/player");
const { playerregister, playerlogin } = require("../controller/playercont");

// const multer = require("multer");
// let upload =multer({ 
//     storage:multer.diskStorage({
//         destination:(req, file, cb)=>{
//             cb(null,"./public/images");
//         },
//         filename:(req,file,cb)=>{
//             cb(null, file.originalname);
//         }
//     })
// })

router.post("/playerregister",playerregister);
router.post("/playerlogin",playerlogin);

module.exports=router;