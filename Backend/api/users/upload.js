// const multer,diskStorage= require("multer");
// const express = require("express");
// const cors = require("cors");
// const app = express();


// app.use(cors({
//     origin:true,
//     methods:["GET","POST"],
//     credentials:true,
// }));

// const storage = diskStorage({

//     destination : (req,file,cb) => {
//         cb(null,"./");
//     },
//     filename : function(req,file,cb) {
//         const ext = file.mimetype.split("/")[1];
//         cb(null,'uploads/${file.originalname}-${Date.now()}.${ext}');
//     }
// });

// const upload = multer({
//     storage : storage
// });

