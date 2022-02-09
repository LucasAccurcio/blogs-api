const { BlogPosts } = require('../../models');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getAllBlogPosts = await BlogPosts.findOne({
      where: { id },
    });

    if (!getAllBlogPosts) throw Error;

    next();
  } catch (err) {
    res
      .status(404)
      .json({ message: 'Post does not exist' });
  }
};
