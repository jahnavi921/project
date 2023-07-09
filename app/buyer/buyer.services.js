const sql = require('mssql')
const config = require('../../utilities/services/dbconfig')
module.exports={
    viewBooks : viewBooks
}
function viewBooks(req){
    return new Promise(async(resolve,reject) => {
        let mssql = await  mssql.connect(config)
        var  products = mssql.request()
        .input('user_code', sql.Int, req.headers.user_code)
        .input('shop_id', sql.Int, req.body,shape_id)
        .execute('master.usp_bookfair_details');
        products.then((response)=>{
            resolve(response)
        }).catch((error) => {
            reject(error)
        })
    })
}