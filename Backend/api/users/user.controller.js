//from here we are controlling/handling the services
const dotenv = require("dotenv");
dotenv.config({path: './.env'});

//const { genSaltSync,compareSync, hashSync } = require("bcrypt");

const {
    create ,
    getUserById,
    getUsers,
    updateUser,
    deleteUser,
    getUserByUserEmail,
    getUserByUserPrn, 
    application,
    profile,
     storeToken,
     fetch,
     getUserByRecEmail,
     storeRecToken,
     getapply,
     allocated,
     malelist,
     femalelist,
     getIdByToken,
     sendotp,
     check_otp_email,
     changepass,
     checkotp
    }=require("./user.service");

const jwt=require("jsonwebtoken");
const express=require("express");
const { genSaltSync, hashSync,} = require("bcryptjs");
var bcrypt = require('bcryptjs')
const {validationResult, check} = require('express-validator');
const cookieParser = require('cookie-parser');
var nodemailer = require("nodemailer");
const hbs = require('nodemailer-express-handlebars');
const { response } = require("express");
const { Context } = require("express-validator/src/context");
const path = require('path');
const app = express();

app.use(cookieParser());



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
         const body = req.body;
         getUserById(body.id, (err,results) => {

            if(err){
                console.log(err);
                return;
            }
            if(!results){
                return res.json({
                    success:0,
                    message: "Record Not Found.."
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
     login : async (req,res) => {
         const body = req.body;
         try {
            getUserByUserEmail(body.email, async(err,results) => {

            if(err){
                console.log(err);
                return res.status(400).send({ msg : err});
            }
            if(!results){ 
                return res.status(401).send({     
                    message: "Invalid email or password"
                });
            }
            let isMatchPassword = await bcrypt.compare(body.password , results.password); //comparing password by bcrypt
            console.log(isMatchPassword);
            if(isMatchPassword){
               
                    results.password = undefined; //we don't use while sign so make it undefind
               
                    let jsontoken = jwt.sign({id : results.id},process.env.TOKEN_KEY,{expiresIn: "24h"});

                    let id= results.id;

                    let usertoken = {
                      jsontoken,
                      id
                   }
              
                //storing token into database
                storeToken(usertoken,(err,results) => {
                    
                    if(err){
                      console.log(err);
                        return;
                    }
                
                });
                
                //store token in the cookies
                // return res.status(200).json({
                //     success:1,
                //     message : "Login Successfully",
                //     token : jsontoken,
                //     user : results

                // });
               

                return res.status(200).cookie("Hostelcookie",jsontoken,{

                    expires: new Date(Date.now() + 86400000),     
                    httpOnly : true

                }).send({
                    success:1,
                    message:"Login Successfully",
                    cookieMsg : "Cookies Being Initialized"

                });

                
            }
            else{
                return res.status(401).send({
                    success :0,
                    errors: "Invalid mail or password"
                });
            }

         });
         }
         catch(err){
             console.log(err);
         }
         
         
         
     },
     applicationForm : (req,res) => {

       // console.log(req.body);

        let {name,email,prn,contactno,caddress,paddress,year,branch,exam,score,category,bgroup,gender,handicap,allergy,dob} = req.body;
        
          const body = {
            name,
            email,
            prn,
            contactno,
            caddress,
            paddress,
            year,
            branch,
            exam,
            score,
            category,
            bgroup,
            gender,
            handicap,
            allergy,
            dob

          }
          console.log(body);

          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
          

          application(body,(err,results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success : 0,
                    message : "Database Connection error"
                });
            }
            return res.status(200).json({
                
                success : 1,
                message:"Application Form Submitted Successfully",
                data: results
            });

          });
     },
     updateProfile :  (req,res) => {

        const body= req.decoded;
        const user = req.body;
        console.log(body);

         getUserById(body.id,(err,result) => {
            if(err){
                console.log(err);
            }
            
            else{
                profile(user,result.id,(err,results) => {
                    if(err){
                        console.log(err);
                        return res.status(500).json({
                            success : 0,
                            message : "Database Connection error....Email should be Unique"
                        });
                    }
                    return res.status(200).json({
                        success : 1,
                        message:"User Updated Successfully",
                        data: results
                    });
                });
                
                }

            });
        
     },
     logout : async(req,res) => {

        return res
        .clearCookie("Hostelcookie")
        .status(200)
        .send({ message: "Successfully logged out " });
    

        // res.cookie("Hostelcookie", "", { expires: new Date(1), path: "/" });
        // res.clearCookie("Hostelcookie", { path: "/" }).json({message:"Successfully Logged Out"});
        // res.send(req.cookies.Hostelcookie);
     },
     getAuthorizedUser : (req,res) => {
         return res.json({user : {id : req.userId, email : req.userEmail}});
     },
     fetchProfile : (req,res) => {
         const id=req.params.id;
         
         fetch(id,(err,results) => {
             if(err){
                 console.log(err);
                 return;
             }
             if(!results){
                 return res.json({
                     success:0,
                     message:"Record Not Found"

                 });
             }
             return res.status(201).send({
                 data:results
             })

         });

     },
     isLoggedIn : (req,res) => {

         const user = req.decoded; 
         console.log(user.id);
         getUserById(user.id,(err,result) => {
             if(err){
                 return res.status(401).send({
                     success:0,
                     message: "User Not Found"
                 });
             }
             return res.status(201).send({
                 success:1,
                 message:"User Logged In",
                 data: result
             });

         });


         
     },
     sendmessage: (req, res) => {
        const msg = req.body;

        message(msg, (err, results) => {
            if (err) {
                console.log(err);
            }
            return res.status(200).send({
                message: "message sent to rector",
                data: results
            });
        });
     },
     reclogin: (req, res) => {
        const body = req.body;
        getUserByRecEmail(body.email, (err, results) => {
            console.log(results)
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }
           
            // const isMatchPassword = compare(body.password, results.password); //comparing password by bcrypt
            if (body.password == results.password) {
                results.password = body.password;
                let jsontoken = sign({ id: results.id }, process.env.TOKEN_KEY);
                let id = results.id;
                let usertoken = {
                    jsontoken,
                    id
                }
                //storing token into database
                storeRecToken(usertoken, (err, results) => {

                    if (err) {
                        console.log(err);
                        return;
                    }

                });

                //store token in the cookies
                res
                    .cookie("Hostelcookie", jsontoken, {
                        expires: new Date(Date.now() + 86400000),
                        httpOnly: true
                    })
                    .status(200)
                    .json({
                        success: 1,
                        message: "Login Successfully",
                        token: jsontoken,
                    });

            }
            else {
                return res.status(400).send({
                    success: 0,
                    errors: "Invalid mail or password"
                });
            }

        });

     },
     getapplications: (req, res) => {
        
        getapply((err, res) => {
            if(err){
                console.log(err);
            }
            res.send(data);
        });
     },
     allocatedlist : (req,res) => {

         allocated((err,results) => {
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
     malealllocatedlist : (req,res) => {

        malelist((err,results) => {

            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                Result : "Males Allocated List",
                data:results

            });

        });

     },
     femalealllocatedlist : (req,res) => {

        femalelist((err,results) => {

            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success:1,
                Result : "Females Allocated List",
                data:results

            });

        });

     },
     emailSend : async(req,res) => {
         const email = req.body.email;
         const response = {}
         getUserByUserEmail(email,(err,result)=> {
            if(err){
                 console.log(err);
                 res.status(401).send({err:"Error Occured"});
            }
            if(!result){
                res.status(400).send({
                    success:0,
                    message:"Email Not Found"

                });
            }

            let otpcode = Math.floor((Math.random()*10000)+1);
            sendotp(email,otpcode,(err,results) => {
                if(err){
                    console.log(err);
                    res.status(400).send({err:"Error!!!"});
                }
                //***********Mailer Function*******
                try{
                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        port: 587,
                        secure: false,
                        auth: {
                            user: process.env.HOST_EMAIL,
                            pass: process.env.HOST_PASSWORD
                        }
                   });
    
                   transporter.use('compile',hbs({
                    
                    viewEngine: {
                        extName: ".handlebars",
                        partialsDir: path.resolve(__dirname, "../../views"),
                        defaultLayout: false,
                      },
                      viewPath: path.resolve(__dirname, "../../views"),
                      extName: ".handlebars",

                       
                   }));
           
                   var mailOptions = {
                       from: process.env.HOST_EMAIL,
                       to: email,
                       subject: 'Password Reset',
                       //html: "",
                      // text: 'OTP for reset password: ' + otpcode,
                       template: 'email',
                       context: {
                           name :result.name,
                           otp : otpcode,
                           email : email,
    
                       }
    
                   };
           
                   transporter.sendMail(mailOptions,(err,info) =>{
                       if(err){
                           console.log(err);
                       }
                       else{
                           console.log('Email sent: '+info.response);
                       }
                   });   
           
                     //************end of mailer *******
                     res.status(200).send({
                        success: 1,
                        message: "Please check your Email for OTP"
    
                    });
                     
    
                

                }
                catch(err){
                    console.log(err);
                }
                
            
            });

         });


     },  
     changePassword : async(req,res) => {
           let data = req.body;
           checkotp(data.code,(err,result) => {
               if(err){
                   res.status(400).send({err:"OTP Not Found"});
                   console.log(err);

               }
                let currentTime = new Date().getTime();
                //console.log(currentTime);
                //console.log(result[0].expiretime);
                let diff = result[0].expiretime - currentTime;
                //console.log(diff);
                if(diff <= 0 )
                {
                    res.status(400).send({err: "OTP invalid...Expired"});
                }
                else{
                   // console.log(data.newpassword);
                    if(data.newpassword === data.cnewpassword)
                    {
                        let newpass;
                        let cnewpass;

                        const salt = genSaltSync(10);
                        newpass = hashSync(data.newpassword,salt);
                        cnewpass = hashSync(data.cnewpassword,salt);

                        let pass = {

                          newpass,
                          cnewpass
                        }
                       // console.log(pass);
                        //console.log(result.email);
                       changepass(pass,result[0].email,(err,results) => {
                           if(err){
                               console.log(err);
                           }
                           if(!results){
                               res.status(400).send({
                                   success:0,
                                   message: "Failed to change password"

                               });
                           }
                           res.status(200).send({
                               success:1,
                               message: "Password Changed Successfully"
                           });
  
  
                       });

                    }
                    else{
                        return res.status(401).send({
                        message: "Both Password Must Match"
                    
                        });
                    }
                }

           });
    }

}