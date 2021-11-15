const express=require("express");
const mysql = require("mysql");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { Router } = require("express");
const { header } = require("express-validator");
const userRouter = require("./api/users/user.router");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use("/api/users",userRouter);


require("./database");


app.get('/api',(req,res)=>{
  res.json({
    success:1,
    message: "This is working"
  });
});


app.listen(3001, (err, res) => {
  if(err)
      throw err;
  console.log("Sever Connnected ....");
})