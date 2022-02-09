const { BlogPosts } = require('../../models');

module.exports = async (req, res, next) => {
  try {
  const getPostById = await BlogPosts.findOne({
    where: { id: req.params.id },
  });

  if (getPostById.dataValues.userId !== req.user.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  next();
  } catch (err) {
    next(err);
  }
};