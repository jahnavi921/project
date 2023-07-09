const express = require('express')
const router = express.Router()

const sellerController = require('./seller.controller')

router.post('/create/shop/:user_code/v1',sellerController.createShop)
router.post('/create/book/v1',sellerController.createBook)
router.post('/view/books/:user_code/v1',sellerController.viewBooks)

module.exports=router