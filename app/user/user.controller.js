const userService = require('./user.services')

module.exports = {
    createAccount : createAccount
}

async function createAccount(req,res){
    await userService.createAccount(req)
    .then((response) => {
        res.send(response)
    })
    .catch((error) => {
        res.send(error)
    })
}