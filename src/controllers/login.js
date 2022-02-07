const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const loginValidation = (user, password) => {
  if (!user || user.password !== password) {
    return { message: 'Invalid fields' };
  }
  return true;
};

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email } });
    const isLoginValid = loginValidation(user, password);
    if (isLoginValid.message) {
      return res.status(400).json({ message: isLoginValid.message });
    }
    
    const userData = user.dataValues;
    const secret = process.env.JWT_SECRET;
    const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
    const token = jwt.sign(userData, secret, jwtConfig);

    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro de processamento interno', error: err.message });
  }
};
