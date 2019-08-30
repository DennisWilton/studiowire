const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    age: Number,
    email: String,
}, {collection: `users`});

userSchema.methods.verifyPassword = function(password){
    if(password === this.password){
        return true;
    } 
    return false;
};

const User = mongoose.model('User', userSchema);


module.exports = User;