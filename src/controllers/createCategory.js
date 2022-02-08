const { Categories } = require('../models');

module.exports = async (req, res) => {
  try {
    const category = await Categories.create(req.body);

    if (!category) throw Error;

    res.status(201).json({
        id: category.dataValues.id,
        name: req.body.name,
      });
  } catch (err) {
    res
      .status(409)
      .json({ message: 'Category already registered' });
  }
};
