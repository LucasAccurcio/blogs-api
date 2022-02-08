const { BlogPosts, Categories, Users } = require('../models');

module.exports = async (_req, res) => {
  try {
    const getAllBlogPosts = await BlogPosts.findAll({
      include: [
        { model: Users, as: 'user' },
        { model: Categories, as: 'categories', through: { attributes: [] } },
      ],
    });
    
    if (!getAllBlogPosts) throw Error;

    res.status(200).json(getAllBlogPosts);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao buscar categorias no banco', error: err.message });
  }
};
