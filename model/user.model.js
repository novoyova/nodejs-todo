const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const db = require('../config/db');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  }
});

// Can't use () => {}
userSchema.pre('save', async function () {
  try {
    var user = this;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, salt);
    user.password = hashPassword;
  } catch (error) {
    throw error;
  }
});

userSchema.methods.comparePassword = async function(userPassword) {
  try {
    const isMatch = await bcrypt.compare(userPassword, this.password)
  } catch (error) {
    throw error;
  }
}

const UserModel = db.model('user', userSchema);

module.exports = UserModel;