const { Users } = require('../models');

module.exports = async (req, res) => {
  try {
    console.log(req.body);
    const user = await Users.create(req.body);

    if (!user) throw Error;

    res.status(201).json(req.body);
  } catch (err) {
    res
      .status(409)
      .json({ message: 'User already registered' });
  }
};
