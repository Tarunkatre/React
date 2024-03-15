var mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        trim:true,
        required:[true,"Enter the username"],
        minLength: [3,'enter a valid username!']
    },
    email:{
        type: String,
        unique: true,
        trim: true,
        required: [true, "Enter the email address"],
        lowercase: true,
        // RegExp
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type: String,
        trim: true,
        required: [true, "Enter the password"],
        minLength: [3, 'enter a valid password!'],
        maxLength: [15, 'enter a valid password!']

    }
},{timestamps:true}
)

module.exports = mongoose.model('user', userSchema)