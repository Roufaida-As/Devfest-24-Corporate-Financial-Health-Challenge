const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    isVerified: {
        type: Boolean,
        default: false,
    },
    verificationToken: String,
    verificationTokenExpires: Date,
});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 12)
    next()
})

UserSchema.methods.matchPassword = async function (pswd, pswdDB) {
    return await bcrypt.compare(pswd, pswdDB);
};

module.exports = mongoose.model('USER', UserSchema)
