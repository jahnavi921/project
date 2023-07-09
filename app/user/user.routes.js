const express = require('express')
const router = express.Router()

const userController = require('./user.controller')

router.post('/create/account/:account_type/v1',userController.createAccount)

module.exports = router