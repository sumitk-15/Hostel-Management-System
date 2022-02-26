const dotenv = require("dotenv");
dotenv.config({path: './.env'});


const {
    
     getUserByRecEmail,
     storeRecToken,
     getapply,
     allocated,
     malelist,
     femalelist,
     
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
                    .cookie("Admincookie", jsontoken, {
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
    logout : async(req,res) => {

        return res
        .clearCookie("Admincookie")
        .status(200)
        .send({ message: "Successfully logged out " });
    },

};