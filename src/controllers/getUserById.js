const { Users } = require('../models');

module.exports = async (req, res) => {
  try {
    const { id } = req.body;
    const users = await Users.findOne({ where: { id } });

    if (!users) throw Error;

    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao buscar usuários no banco', error: err.message });
  }
};
