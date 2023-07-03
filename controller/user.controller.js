const UserServices = require('../services/user.services');

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const response = await UserServices.registerUser(email, password);
    res.json({ status: true, success: 'User registered successfully' });
  } catch (error) {
    throw error;
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await UserServices.checkUser(email);

    if(!user) {
      throw new Error('User doesn\'t exists');
    }

    const isMatch = await user.comparePassword(password)

    if(isMatch === false) {
      throw new Error('Password invalid');
    }

    let tokenData = {_id: user._id, email: user.email};

    const token = await UserServices.generateToken(tokenData, 'secret', '1h');

    res.status(200).json({status: true, token: token});
   
  } catch (error) {
    throw error;
  }
};