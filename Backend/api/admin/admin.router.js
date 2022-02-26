const { 
    
    reclogin,
    getapplications,
    allocatedlist,
    malealllocatedlist,
    femalealllocatedlist,
    logout
    
 } = require("./user.controller");

const router = require("express").Router();
const {checkToken} = require("../../auth/token_validation");
const {body, check} = require('express-validator');


router.get("/reclogin/allocated",allocatedlist);
router.get("/reclogin/maleallocated",malealllocatedlist);
router.get("/reclogin/femaleallocated",femalealllocatedlist);

router.post("/reclogin",reclogin);
router.get("/reclogin/logout",checkToken,logout);
router.get("/getapplications", getapplications);


module.exports = router;