const sql = require('mssql')
const config = require('../../utilities/services/dbconfig')
module.exports={
    createAccount : createAccount
}

function createAccount(req){
    return new Promise(async(resolve,reject) => {
        console.log("configggg",config)
        let mssql = await  sql.connect(config)
        var  products = mssql.request().input('name', sql.VarChar, req.body.name)
        .input('user_type', sql.VarChar, req.headers.account_type)
        .execute('master.usp_user_detail_upsert');
        products.then((response)=>{
            resolve(response)
        }).catch((error) => {
            reject(error)
        })
    })
}