const { Users } = require('../models');

module.exports = async (req, res) => {
  try {
    const { displayName, email, password, image = 'null' } = req.body;
    console.log(displayName, email, password, image);
    const user = await Users.create({ displayName, email, password, image });

    if (!user) throw Error;

    res.status(201).json({ 
      displayName,
      email,
      password,
      image,
    });
  } catch (err) {
    res
      .status(409)
      .json({ message: 'User already registered' });
  }
};
