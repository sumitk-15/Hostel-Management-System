// const express = require('express');
// const router = express.Router();
// //const app= express();
// const db=require('../database.js')
// const bcrypt = require('bcrypt');
// //const jwt=require('jsonwebtoken');
// //const { ValidatorsImpl } = require('express-validator/src/chain');
// // const app = require('..');



// // // router.post('/registration',(req,res) =>{
// // //   console.log(req.body);
// // // })

// router.post('/registration',(req,res) => {

//     console.log(req.body);
//   })

   

// // // // router.post('/signup',function(req,res,next){
// // // //   console.log(req.body);
  
// // // //     console.log("Hello Sumit");
    

// // // //     let {uname,email,prn,pass,cpass} = req.body
// // // //     //creating user object
// // // //     const user ={
// // // //         uname,
// // // //         email,
// // // //         prn,
// // // //         pass,
// // // //         cpass
// // // //     }
// // // //     if(!uname || !email || !prn || !pass || !cpass){
// // // //         return res.status(422).send({
// // // //             msg: 'Please check all fields entered or not'
// // // //         });
// // // //     }

// // // //     if(!uname){
// // // //         return res.status(400).send({
// // // //           msg: 'username should not be empty'
// // // //         });
// // // //       }
    
// // // //     if (!pass|| pass.length < 6) {
// // // //         return res.status(400).send({
// // // //           msg: 'Please enter a password with min. 6 chars'
// // // //         });
// // // //       }

// // // //     if (!cpass || cpass != pass){

// // // //         return res.status(400).send({
// // // //             msg: 'Both passwords must match'
// // // //           });
// // // //     }
        
// // // //     var sql="SELECT * FROM Registration WHERE email =?";
// // // //     db.query(sql,email,(err,result) => {

// // // //         if(err){
// // // //             return res.status(400).send({
// // // //                 msg:err
// // // //             })
// // // //         }
// // // //          //check whether username already exist or not
// // // //         if (result.length!==0) {
// // // //             return res.status(409).send({
// // // //               msg: 'This email is already in use!'
// // // //             });
// // // //           } 
          
// // // //           bcrypt.hash(pass, 8).then((hash)=> {
// // // //             //set the password to hash value
// // // //             user.pass=hash

// // // //           }).then(()=>{
            
// // // //             db.query("INSERT INTO Registration SET ?",(err,result)=>{
// // // //               if(err){
// // // //                   return res.status(400).send({
// // // //                       msg:err
// // // //                   })
// // // //               }

// // // //               db.query('SELECT * FROM Registration WHERE email=?',email,(err,result)=>{
// // // //                 if(err){
// // // //                   return res.status(400).send({
// // // //                       msg:err
// // // //                   })
// // // //                 }
            
// // // //                 return res.status(201)
// // // //                 .send({
// // // //                     userdata:user,
// // // //                     msg:"successfully registered"
// // // //                   })
// // // //              })
     
// // // //         })
// // // //         })        
// // // // });


// // // // });

// module.exports = router;