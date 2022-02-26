const pool=require("../../database");

module.exports= {

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



};


