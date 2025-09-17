// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String
// });

// module.exports = mongoose.model('User', UserSchema);
import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
const signUpSchema = mongoose.Schema(
    {
        name: { type: String, require: true },
        email: { type: String, require: true, unique: true },
        password: { type: String, require: true },
    }
)

signUpSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next();
});

signUpSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}



const users = mongoose.model("signups", signUpSchema)
export default users
