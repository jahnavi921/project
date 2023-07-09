const userService = require('./buyer.services')

module.exports = {
    viewBooks : viewBooks
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