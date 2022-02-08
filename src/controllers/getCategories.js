const { Categories } = require('../models');

module.exports = async (_req, res) => {
  try {
    const categories = await Categories.findAll();
    categories.sort((a, b) => a.id - b.id);
    if (!categories) throw Error;

    res.status(200).json(categories);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao buscar categorias no banco', error: err.message });
  }
};
