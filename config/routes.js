const express = require('express');
const router = express.Router()

const userRoute = require('../app/user/user.routes')
const sellerRoute = require('../app/seller/seller.routes')
const buyerRoute = require('../app/buyer/buyer.routes')

router.use('/bookfair', userRoute,sellerRoute,buyerRoute)

module.exports=router