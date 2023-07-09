const userService = require('./seller.services')

module.exports = {
    createShop : createShop,
    createBook : createBook,
    viewBooks : viewBooks
}

async function createShop(req,res){
    await userService.createShop(req)
    .then((response) => {
        res.send(response)
    })
    .catch((error) => {
        res.send(error)
    })
}
async function createBook(req,res){
    await userService.createBook(req)
    .then((response) => {
        res.send(response)
    })
    .catch((error) => {
        res.send(error)
    })
}
async function viewBooks(req,res){
    await userService.viewBooks(req)
    .then((response) => {
        res.send(response)
    })
    .catch((error) => {
        res.send(error)
    })
}