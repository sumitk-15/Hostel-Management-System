const pool=require("../../database");




//here all services of users are listed
module.exports= {
    
    create: (data,callBack) => {
        pool.query(
            'insert into registration(name,email,prn,password,cpassword) values(?,?,?,?,?)',
          
            [
                data.name,
                data.email,
                data.prn,
                data.password,
                data.cpassword

            ],
            (error,results,fields) => {
                
                //When database has entry for that email will return array of rows containing that email.
                //when database doesn't have entry with that email it will return an empty array.
               // undefined !== results && results.length
               
                if(error){
                   return callBack(error);
                }
                return callBack(null,results);
            }

        );
    },
    getUsers : (callBack) => {
        pool.query(
            'select id,name,email,prn from registration',
            [],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                
                }
                    return callBack(null,results);
            }

        );
    },
    getUserById : (id,callBack) => {
        
        pool.query(
            'select id,name,email,prn from registration where id =?',
            [id],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                    return callBack(null,results[0]);
            }
        );
    },
    updateUser : (data,callBack) => {
        pool.query(
            'update registration set name =?,email=?,prn=?,password=?,cpassword=? where id=?',
            [
                data.name,
                data.email,
                data.prn,
                data.password,
                data.cpassword,
                data.id
            ],          
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack (null,results);
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                


        );
    },
    deleteUser : (data,callBack) => {
        pool.query(
          'delete from registration where id =?',
          [data.id],
          (error,results,fields) => {
              if(error){
                  callBack(error);
              }
                  return callBack(null,results[0]);
          }
        );
    },
    getUserByUserEmail: (email,callBack) => {

         pool.query(
             'select * from registration where email=?',
             [email],
             (error,results,fields) => {
                 if(error) {
                    callBack(error);
                 }
                 return callBack(null,results[0]);

             }
         );



    },
    getUserByUserPrn : (prn,callBack) => {

        pool.query(
            'select * from registration where prn=?',
            [prn],
            (error,results,fields) => {
                if(error) {
                   callBack(error);
                }
                return callBack(null,results[0]);

            }
        );


    },
    application:(data,callBack) => {
        //console.log(data);
        pool.query(
            'insert into applicationform (fullname,email,prn,phoneno,caddress,paddress,year,branch,lastexam,score,category,bloodgroup,gender,ishandicap,medicalinfo,dob) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',

            [
                data.name,
                data.email,
                data.prn,
                data.contactno,
                data.caddress,
                data.paddress,
                data.year,
                data.branch,
                data.exam,
                data.score,
                data.category,
                data.bgroup,
                data.gender,
                data.handicap,
                data.allergy,
                data.dob

            ],

            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
          
           
        );
    },
    profile : (data,id,callBack) => {
        console.log(data.email);

        pool.query(
            'update registration set email=?,name=?,phoneno=?,caddress=?,year=?,dob=? where id=?',

            [
                data.email,
                data.name,
                data.phoneno,
                data.caddress,
                data.year,
                data.dob,
                id
               
            ],

            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }

        );

    },
    getUserByToken: (token,callBack) => {
        pool.query(
            'select * from registration where token=?',
            [token],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                    return callBack(null,results[0]);
            }


        );
    },
    storeToken : (data,callBack) => {
        console.log(data);
        pool.query(
            
            'update registration set token=? where id=?',
        
            [
                data.jsontoken,
                data.id
            ],
            
            (error,results,fields) => {
                if(error){
                    callBack(error);
                }
                return callBack(null,results[0]);
            }

        );

       
    },
    fetch : (data,callBack) => {
        pool.query(
            'select * from profile where id=?',
            [data.id],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results)
            }
            

        );

    },
    message: (data, callBack) => {
        console.log(data);
        pool.query(
            'insert into queries (email, name, roomno, comment) values (?,?,?,?)',
            [
                data.email,
                data.name,
                data.roomno,
                data.comment
            ],
            (err, results, fields) => {
                if (err) {
                    return callBack(err);
                }
                return callBack(null, results);

            }
        );
    },
    getUserByRecEmail: (email, callBack) => {
        
        pool.query(
            'select * from rectorlogin where email=?',
            [email],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);

            }
        );



    },
    storeRecToken: (data, callBack) => {
        pool.query(

            'update rectorlogin set token=? where id=?',

            [
                data.jsontoken,
                data.id
            ],

            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, results[0]);
            }

        );


    },
    getapply: (callBack) => {

        pool.query(
            'select * from applicationform',
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, results[0]);
            }

        );
    },
    allocated : (callBack) => {
        pool.query (
            'select * from applicationform where year in("First Year","Second Year","Third Year","Final Year") and category in("General","OBC","EWS","SEBC","SC","ST","VJNT") order by year,category,score desc',
            [],
            (err,results,fields) => {
                if(err){
                   return callBack(err);
                }
                return callBack(null,results);
            }
        );
    },
    malelist : (callBack) => {
        pool.query (
            'select * from applicationform where gender = "male" and year in ("First Year","Second Year","Third Year","Final Year") and category in("General","OBC","EWS","SEBC","SC","ST","VJNT") order by year,category,score desc',
            [],
            (err,results,fields) => {
                if(err){
                    return callBack(err);
                }
                return callBack(null,results);
            }
        );

    },
    femalelist : (callBack) => {
        pool.query(
            'select * from applicationform where gender = "female" and year in ("First Year","Second Year","Third Year","Final Year") and category in("General","OBC","EWS","SEBC","SC","ST","VJNT") order by year,category,score desc',
            [],
            (err,results,fields) => {
                if(err){
                    return callBack(err);
                }
                return callBack(null,results);
            }
        );
    },
    getIdByToken : (token,callBack) => {
         pool.query(
             'select id from registration where token=?',
             [token],
             (err,results,fields) => {
                 if(err){
                    callBack(err);
                 }
                 return callBack(null,results);
                 

             }
         );

    },
    sendotp : (email,code,callBack) => {
        const expireIn = new Date().getTime() + 300*1000;
        pool.query(
            'insert into otp(email,code,expiretime) values(?,?,?)',
            [
               email,
               code,
               expireIn
            ],
            (err,results,fields)=> {
                if(err){
                    callBack(err);
                }
                return callBack(null,results);
            }
        );
    },
    check_otp_email : (callBack) => {
        pool.query(
            'select * from otp',
            [],
            (err,results,fields) => {
                if(err){
                    callBack(err);
                }
                return callBack(null,results);
            }
        );
    },
    changepass : (data,email,callBack) => {
        pool.query(
            'update registration set password=?, cpassword= ? where email=?',
            [
               data.password,
               data.cpassword,
               email
            ],
            (err,results,fields) => {
                if(err){
                    callBack(err);
                }
                return callBack(null,results);

            }
        );
    }

    


};