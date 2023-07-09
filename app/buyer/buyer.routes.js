const express = require('express')

const router = express.Router()

const buyerController = require('./buyer.controller')

router.post('/view/shop/book/v1',buyerController.viewBooks)

module.exports=router