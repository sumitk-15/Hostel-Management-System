const { 
    
    adminlogin,
    allocatedlist,
    malealllocatedlist,
    femalealllocatedlist,
    logout,
    addmanager,
    admininfo,
    getFirstApplications,
    updateAdminProfile,
    fetchAdminProfile,
    removeManager,
    criteria,
    changeFormSetting,
    getForm1Status,
    getForm2Status,
    outside_Notification,
    user_Notification,

    
 } = require("./admin.controller");

const router = require("express").Router();
const {checkToken} = require("../../auth/admin_token_validation");
const {body, check} = require('express-validator');
const { addCriteria } = require("./admin.service");


router.get("/reclogin/allocated",allocatedlist);
router.get("/reclogin/maleallocated",malealllocatedlist);
router.get("/reclogin/femaleallocated",femalealllocatedlist);

router.post("/login",adminlogin);
// router.get("/reclogin/logout",checkToken,logout);
//router.get("/getapplications", getapplications);

//*************New Routes **************
router.post("/addmanager",addmanager);

router.post("/login",adminlogin);

router.get("/getadmin",admininfo);

router.get("/getfirstapplications",getFirstApplications);

router.get("/logout",checkToken,logout);

router.get("/login/fetchadmin",checkToken,fetchAdminProfile);

router.patch("/login/profile",checkToken,updateAdminProfile);

router.delete("/remove",checkToken,removeManager);

router.post("/criteria",checkToken,criteria);

router.patch("/handleforms",checkToken,changeFormSetting);

router.get("/firstformstatus",getForm1Status);

router.get("/secondformstatus",getForm2Status);

router.post("/post_notice_outsiders",checkToken,outside_Notification);

router.post("/post_notice_user",checkToken,user_Notification);



module.exports = router;