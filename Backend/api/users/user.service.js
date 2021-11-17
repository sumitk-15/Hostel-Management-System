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
    getUserByUserId : (id,callBack) => {
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
            'update registration set name =?,email=?,prn=?,password=?,cpassword=? where id =?',
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
                  return callBack(error);
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
                    return callBack(error);
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
                   return callBack(error);
                }
                return callBack(null,results[0]);

            }
        );


    },
    application:(data,callBack) => {
        pool.query(
            

        );
    }

};