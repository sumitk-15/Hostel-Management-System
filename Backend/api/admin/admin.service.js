const pool=require("../../database");
const date = require('date-and-time');

module.exports= {

    getAdminByEmail: (email, callBack) => {
        
        pool.query(
            'select * from admin where email=?',
            [email],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                //let output=JSON.parse(JSON.stringify(results))
                return callBack(null, results[0]);
    
            }
        );
    },

    storeAdminToken: (data, callBack) => {
        pool.query(

            'update admin set token=? where id=?',

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

    getAdminById : (id,callBack) => {
        pool.query(
            'select * from admin where id=?',
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, results[0]);
            }

        );

    },

    getFirstApply: (callBack) => {

        pool.query(
            'select * from firstapp',
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                var string=JSON.stringify(results);
                var json =  JSON.parse(string);
                console.log(json);
                return callBack(null, json);
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
    getStatus : (mail,callBack) => {
        pool.query(
            'select * from manager where email =?',
            [mail],
            (err,results,fields) => {
                if(err){
                    return callBack(err);
                }
                return callBack(null,results[0]); 
                  
            }             
        );

    },

    addManager : (data,callBack) => {
        pool.query(
            'insert into manager(name,phoneno,email,department,username,password,block1,block2) values(?,?,?,?,?,?,?,?)',
            [
            data.name,
            data.phoneno,
            data.email,
            data.department,
            data.username,
            data.pass,
            data.b1,
            data.b2,
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
            'update admin set name=?,email=?,username=?,password=?,phoneno=?,block=? where id=?',

            [
                data.name,
                data.email,
                data.username,
                data.password,
                data.phoneno,
                data.block,
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
    fetchAdmin : (data,callBack) => {
        console.log(data.id);
        pool.query(
            'select * from admin where id=?',
            [data.id],
            (error,results,fields) => {
                if(error){
                    console.log("In error");
                     return callBack(error);
                }
                var string=JSON.stringify(results);
                var json =  JSON.parse(string);
                //console.log(json);
                return callBack(null,json[0]);    
            }
            

        );

    },
    deleteManager : (data,callBack) => {
        pool.query(
            'delete from manager where email=? and username=?',
            [
                data.email,
                data.username
            ],
            (error,results,fields) => {
                if(error){
                     return callBack(error);
                }
            
                return callBack(null,results);    
            }

        );
    },
    getManagerByEmailandUsername: (data,callBack) => {
        pool.query(
            'select * from manager where email=? and username=?',
            [
                data.email,
                data.username
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
    
            }
        );

    },
    addCriteria : (data,callBack) => {
        pool.query(
            'insert into criteria(gender,course,year,seats) values(?,?,?,?)',
            [
                data.gender,
                data.program,
                data.year,
                data.seats,
            ],
            (err,results,fields) => {
                if(err){
                    return callBack(err);
                }
                return callBack(null,results);
            }

        );

    },
    handleForm : (data,callBack) => {
        pool.query(
            'update handleform set form1=?,form2=?',
            [
                data.form1,
                data.form2
            ],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }

        );
    },
    getForm1State : (callBack) => {
        pool.query(
            'select form1 from handleform',
            [],
            (err,results,fields) => {
                if(err){
                    return callBack(err);
                }
                let output=JSON.parse(JSON.stringify(results))
                return callBack(null,output[0]); 
                  
            }             
        );
    },
    getForm2State : (callBack) => {
        pool.query(
            'select form2 from handleform',
            [],
            (err,results,fields) => {
                if(err){
                    return callBack(err);
                }
                let output=JSON.parse(JSON.stringify(results))
                return callBack(null,output[0]); 
                  
            }             
        );
    },
    outside_notify : (data,callBack) => {
        pool.query(
            'insert into notifications(title,textarea) values(?,?)',
            [
                data.title,
                data.comment,
            ],
            (err,results,fields) => {
                if(err){
                    return callBack(err);
                }
                let output=JSON.parse(JSON.stringify(results))
                return callBack(null,output[0]); 
                  
            }             
        
        );
    },
    user_notify : (data,callBack) => {
        const now  =  new Date();
        const value = date.format(now,'YYYY/MM/DD HH:mm:ss');
        pool.query(
            'insert into notices(title,textbox,date) values(?,?)',
            [
                data.title,
                data.comment,
                value
            ],
            (err,results,fields) => {
                if(err){
                    return callBack(err);
                }
                let output=JSON.parse(JSON.stringify(results))
                return callBack(null,output[0]); 
                  
            }             
        
        );
    },


};


