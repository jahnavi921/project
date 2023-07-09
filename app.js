let config = require('./config/env_config')
const express = require('express')
const app = express()
const routes = require('./config/routes')
const cors = require('cors')

var corsOptions = {
    origin:"*"
}
app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',routes)

app.listen(process.env.PORT, () => {
    console.log(`server is running on http://${process.env.HOST}:${process.env.PORT}`)
})