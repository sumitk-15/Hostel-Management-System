const express=require("express");
const mysql = require("mysql");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { Router } = require("express");
const { header } = require("express-validator");
const userRouter = require("./api/users/user.router");
const adminRouter = require("./api/admin/admin.router");
const managerRouter = require("./api/manager/manager.router");
const bodyParser =  require("body-parser");
const cookieParser = require('cookie-parser');
const session = require("express-session");


app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
  credentials: true
}));


app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({
  extended: true
}));

app.use("/api/users",userRouter); //For Students

app.use("/api/admin",adminRouter); //For admin

app.use("/api/manager",managerRouter); //For Managers


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