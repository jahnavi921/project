const sql = require('mssql')
const config = require('../../utilities/services/dbconfig')
module.exports={
    createShop : createShop,
    createBook : createBook,
    viewBooks : viewBooks
}

function createShop(req){
    return new Promise(async(resolve,reject) => {
        let mssql = await  mssql.connect(config)
        var  products = mssql.request().input('shop_name', sql.VarChar, req.body.shop_name)
        .input('user_code', sql.Int, req.headers.user_code)
        .execute('master.usp_shop_detail_upsert');
        products.then((response)=>{
            resolve(response)
        }).catch((error) => {
            reject(error)
        })
    })
}

function createBook(req){
    return new Promise(async(resolve,reject) => {
        let mssql = await  mssql.connect(config)
        var  products = mssql.request().input('book_name', sql.VarChar, req.body.book_name)
        .input('shop_name', sql.VarChar, req.body.shop_name)
        .input('stock_count', sql.Int, req.headers.stock_count)
        .execute('master.usp_book_detail_upsert');
        products.then((response)=>{
            resolve(response)
        }).catch((error) => {
            reject(error)
        })
    })
}

function viewBooks(req){
    return new Promise(async(resolve,reject) => {
        let mssql = await  mssql.connect(config)
        var  products = mssql.request()
        .input('user_code', sql.Int, req.headers.user_code)
        .execute('master.usp_bookfair_details');
        products.then((response)=>{
            resolve(response)
        }).catch((error) => {
            reject(error)
        })
    })
}