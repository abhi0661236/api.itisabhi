import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';



const adminSchema = mongoose.Schema({
    email: String,
    username: String,
    password: String
});

autoIncrement.initialize(mongoose.connection);
adminSchema.plugin(autoIncrement.plugin, 'admin');

const admin = mongoose.model('admin', adminSchema);

export default admin;