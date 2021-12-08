const express=require("express");
const mysql = require("mysql");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { Router } = require("express");
const { header } = require("express-validator");
const userRouter = require("./api/users/user.router");
const bodyParser =  require("body-parser");
const cookieParser = require('cookie-parser');
const session = require("express-session");

const multer = require('multer');

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

// app.use(session({
//    secret:process.env.TOKEN_KEY,
//    resave: false,
//    saveUninitialized: false,
//    cookie :  {
//      maxAge : 60*60*24,
//    },
//   })
// );


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