const { Users } = require('../models');

module.exports = async (req, res) => {
  try {
    const { id } = req.user;
    await Users.destroy({ where: { id } });

    res.status(204).end();
  } catch (err) {
    res
      .status(404)
      .json({ message: err.message });
  }
};
