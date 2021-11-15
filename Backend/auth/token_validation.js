const {verify} = require("jsonwebtoken");
const { }=require("express-validator");


module.exports = {
    checkToken : (req,res,next) => {
        let token = req.headers['x-access-token'] || req.headers['authorization']; 
       // let token = req.headers("authorization");
        if(token){
            token=token.slice(7);
            verify(token, process.env.TOKEN_KEY,(err,decoded) => {
                if(err){
                    return res.json({
                        success : 0,
                        message: "Invalid token "
                    });
                }
                else{ 
                    decoded=req.decoded;
                    next();
                }
             

            });

        }
        else{
            return res.json({
                success: 0,
                message: "Access Denied: Unauthorized User"
            });
        }
    }
}