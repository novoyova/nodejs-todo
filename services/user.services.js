const UserModel = require('../model/user.model');
const jwt = require('jsonwebtoken');

class UserServices {
  static async registerUser(email, password) {
    try {
      const createUser = new UserModel({ email, password });
      return await createUser.save();
    } catch (error) {
      throw error;
    }
  }

  static async checkUser(email) {
    try {
      return await UserModel.findOne({email});
    } catch (error) {
      throw error;
    }
  }

  static async generateToken(tokenData, secretKey, jwtExpire) {
    return jwt.sign(tokenData, secretKey, {expiresIn: jwtExpire});
  }
}

module.exports = UserServices;