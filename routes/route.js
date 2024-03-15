var express = require('express');
var router = express.Router();
let{homeRoute,createUser,showUser} = require('../controller/userController.js')

router.get('/', homeRoute )

router.post('/create', createUser)

router.get('/users', showUser)

module.exports = router;