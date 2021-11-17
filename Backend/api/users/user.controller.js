//from here we are controlling/handling the services
const dotenv = require("dotenv");
dotenv.config({path: './.env'});

//const { genSaltSync,compareSync, hashSync } = require("bcrypt");

const {create ,getUserByUserId,getUsers,updateUser,deleteUser,getUserByUserEmail,getUserByUserPrn}=require("./user.service");

const { sign } = require("jsonwebtoken");
const { genSaltSync, hashSync } = require("bcryptjs");
const { compareSync } = require("bcrypt");
const {validationResult} = require('express-validator');




module.exports = {
     createUser : (req,res) => {
         //const body=req.body;
         let {name,email,prn,password,cpassword} = req.body;


         const body = {
             name,
             email,
             prn,
             password,
             cpassword
         }
        //  if(getUserByUserEmail(body.email,(err,result) => {
        //      if(err){
        //          console.log(err);
        //      }
        //      if(result){
        //          return res.status(400).send({
        //              msg: 'Email already exist'
        //          });
        //      }

        // }))
        // if(getUserByUserPrn(body.prn,(err,result)=> {
        //     if(err){
        //         console.log(err);
        //     }
        //     if(result){
        //         return res.status(400).send({
        //             msg : 'PRN Should be Unique'
        //         })
        //     }

        // }) )

        ///////////////////
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(422).json({ errors: errors.array() });
        }

        ///////////
        
        if(!name){
            return  res.status(422).send({
                msg : 'Name should not be empty'

            })
        }
        
            if(!name || !email || !prn || !password || !cpassword){
                return res.status(422).send({
                msg: 'Please check all fields entered or not'
                });
            }
            if (!password) {
                return res.status(400).send({
                msg: 'Please enter a password '
               });
           }
           if(!cpassword || password != cpassword){
               return res.status(400).send({
                   msg: 'Both Password Must Match'

               });
           }

            const salt = genSaltSync(10);
            body.password = hashSync(password,salt);
            body.cpassword = hashSync(cpassword,salt);


        
          create(body,(err,results) => {
             if(err){
                 console.log(err);
                 return res.status(500).json({
                     success : 0,
                     message : "Database Connection error....Email/PRN should be Unique"
                 });
             }
             return res.status(200).json({
                 success : 1,
                 message:"User Registered Successfully",
                 data: results
             });
         });
         
     },
     getUserByUserId: (req,res) => {
         const id= req.params.id;
         getUserByUserId(id, (err,results) => {

            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success:0,
                    message: "Record Not Found"
                });
            }
            return res.json({
                success:1,
                data: results

            });

         });
     },
     getUsers : (req,res) => {
         getUsers ((err,results) => {
             if(err){
                 console.log(err);
                 return;
             }
             return res.json({
                 success:1,
                 data:results

             });

         });
     },
     updateUser :(req,res) => {
         const body =req.body;
         const salt = genSaltSync(10);
         body.password = hashSync(body.password,salt);
         body.cpassword=hashSync(body.cpassword,salt);
         updateUser(body,(err,results) => {
             if(err){
                 console.log(err);
                 return;
             }
             if(!results){
                 return res.json({
                     success : 0,
                     message: "Failed to update user"
                 });
             }
             return res.json({
                 success:1,
                 message : "updated successfully"

             });
         });
     },
     deleteUser : (req,res) => {
         const data=req.body;
         deleteUser(data,(err,results) => {
             if(err){
                 console.log(err);
                 return ;
             }
             if(!results){
                 return res.json({
                     success:0,
                     message: "Record Not Found"
                 });
             }
             return res.json({
                 success:1,
                 message : "User deleted Successfully"
             });
         });
     },
     login : (req,res) => {
         const body = req.body;
         getUserByUserEmail(body.email,(err,results) => {

            if(err){
                console.log(err);
            }
            if(!results){
                return res.json({
                    success: 0,
                    data : "Invalid email or password"
                });
            }
            const result =compareSync(body.password , results.password);
            if(result){
                results.password = undefined;
                const jsontoken = sign({result : results.id},process.env.TOKEN_KEY,{
                    expiresIn: "1h"

                });
                return res.json({
                    success:1,
                    message : "Login Successfully",
                    token : jsontoken
                });
            }
            else{
                return res.json({
                    success :0,
                    data: "Invalid mail or password"
                });
            }

         });
     },
     applicationForm : (req,res) => {
         
     }
     
     


}