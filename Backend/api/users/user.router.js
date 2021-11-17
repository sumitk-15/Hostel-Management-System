const { createUser,getUserByUserId,getUsers,updateUser,deleteUser,login,applicationForm } = require("./user.controller");
const router = require("express").Router();
const {checkToken} = require("../../auth/token_validation");
const {body} = require('express-validator');

router.post("/",createUser);

router.get("/",checkToken,getUsers);
router.get("/:id",checkToken,getUserByUserId);
router.patch("/",checkToken,updateUser);
router.delete("/",checkToken,deleteUser);
router.post("/login",login);

router.post("/apply",applicationForm);
module.exports = router;