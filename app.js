const express = require('express')
const app = express();
const logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config({path: './.env'})

require('dotenv').config({path:'./.env'})
// routes
const usersRouter = require('./routes/route')

require('./models/dbconfig').connection()

// body parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// route logs to console
app.use(logger('dev'))


// fetch all routes created in routes
app.use('/',usersRouter)

// fetch routes that aren't created
app.all('*',function(req, res){
    res.status(404).json({
        state:'failure',
        message: `'${req.url}' not found!`
    })
})

// server
app.listen(process.env.PORT,()=>{})