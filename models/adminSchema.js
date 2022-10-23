const mongoose = require('mongoose');



const adminSchema = mongoose.Schema({
    email: String,
    username: String,
    password: String
});


const admin = mongoose.model('admin', adminSchema);

module.exports = admin;