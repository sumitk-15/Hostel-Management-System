
const { 
    createUser,
    getUserByUserId,
    getUsers,
    updateUser,
    deleteUser,
    login,
    applicationForm,
    updateProfile, 
    logout, 
    getAuthorizedUser,
    fetchProfile,
    sendmessage,
    reclogin,
    getapplications,
    allocatedlist,
    malealllocatedlist,
    femalealllocatedlist,
    isLoggedIn,
    emailSend,
    changePassword
 } = require("./user.controller");

const router = require("express").Router();
const {checkToken} = require("../../auth/token_validation");
const {body, check} = require('express-validator');
//const userService = require("./user.service");


// const path = require("path");
// const {upload} =require("./upload");



//CRUD operation
router.post("/",createUser);

router.get("/",getUsers);
router.get("/:id",getUserByUserId);
router.patch("/",updateUser);
router.delete("/",deleteUser);
router.post("/login",login);

//Apply for hostel
router.post("/apply",[
    check('email','Please check the email').isEmail().isLength({ min: 10, max: 30 }),
    check('prn','PRN Should be complete').isAlphanumeric().isLength({min : 14, max: 17 }),
    check('contactno','Mobile number should contains 10 digits').isLength({ min: 10, max: 10 })
] ,applicationForm);

  //Allocation List
router.get("/reclogin/allocated",allocatedlist);
router.get("/reclogin/maleallocated",malealllocatedlist);
router.get("/reclogin/femaleallocated",femalealllocatedlist);

router.patch("/profile",checkToken,updateProfile);

router.get("/login/logout",checkToken,logout);

router.get("/protected",checkToken,getAuthorizedUser);

router.get("/update",checkToken,fetchProfile);

router.post("/message", sendmessage);

router.get("/login/isloggedin",checkToken,isLoggedIn);

router.post("/reclogin",reclogin);

router.get("/getapplications", getapplications);

router.post("/email-send",emailSend);

router.post("/change-password",changePassword);


router.get("/random",checkToken,(req,res) => {
    return res.status(200).send({data:"Success"});

});






//router.post("/profile/image",upload.single('image'),uploadimg);



module.exports = router;
