const mongoose = require('mongoose');

exports.connection = async () =>{
    try{
        mongoose.connect(process.env.DB_URL)
    }catch(err){
        console.log(err.message);
    }
}