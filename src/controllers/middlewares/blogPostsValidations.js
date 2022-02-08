const { Categories } = require('../../models');

const constantsValidations = (body) => {
  const { title, content, categoryIds } = body;
  if (!title) return ({ code: 400, message: '"title" is required' });
  if (!content) return ({ code: 400, message: '"content" is required' });
  if (!categoryIds) return ({ code: 400, message: '"categoryIds" is required' });
  if (typeof categoryIds !== 'object') {
    return ({ code: 400, message: '"categoryIds" need to be an array' });
  }
  return body;
};

module.exports = async (req, res, next) => {
  try {
    const isBodyValid = constantsValidations(req.body);
    if (isBodyValid.code) {
      return res.status(isBodyValid.code).json({ message: isBodyValid.message });
    }
    const categories = await Categories.findAll();

    const { categoryIds } = req.body;

    const isCategoriesValid = categoryIds
      .every((category) => categories.find((c) => category === c.id));

    if (!isCategoriesValid) return res.status(400).json({ message: '"categoryIds" not found' });

    next();
  } catch (err) {
    next(err);
  }
};