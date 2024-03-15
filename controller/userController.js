const userModel = require('../models/user')

exports.homeRoute = function (req, res) {
    res.status(501).json({
        success: true,
        message: 'This is test route'
    })
}

exports.createUser = async function(req,res){
    try{
        const newuser = new userModel(req.body)
        await newuser.save();
        res.status(200).json({ newuser })
    }catch(err){
        res.status(500).send(err.message)
    }
}   

exports.showUser = async function(req,res){
    let user = await userModel.find()
    res.status(200).json({ user })
}