const { Op } = require('sequelize');
const { BlogPosts, Categories, Users } = require('../models');

const searchByQuery = async (query) => {
  const search = await BlogPosts.findAll({
    where: {
      [Op.or]: [
        {
          title: { [Op.like]: `%${query.q}%` },
        },
        {
          content: { [Op.like]: `%${query.q}%` },
        },
      ],
    },
    include: [
      { model: Users, as: 'user' },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });

  return search;
};

module.exports = async (req, res) => {
  try {
    const search = await searchByQuery(req.query);
    if (!search) throw Error;

    res.status(200).json(search);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao buscar usuários no banco', error: err.message });
  }
};
