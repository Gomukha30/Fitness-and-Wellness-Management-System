const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    //firstname, lastname, email, pass, Dob
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    Dob:{
    type: Date,
    required: true 
    }
})



userSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password,12); 
    }
    next();
});





const User = mongoose.model('USER',userSchema);

module.exports = User;