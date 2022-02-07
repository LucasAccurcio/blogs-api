const { Users } = require('../models');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await Users.findOne({ where: { id } });

    if (!users) throw Error;

    res.status(200).json(users);
  } catch (err) {
    res
      .status(404)
      .json({ message: 'User does not exist' });
  }
};
