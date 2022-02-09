const { BlogPosts, Categories, Users } = require('../models');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const getAllBlogPosts = await BlogPosts.findOne({
      where: { id },
      include: [
        { model: Users, as: 'user' },
        { model: Categories, as: 'categories', through: { attributes: [] } },
      ],
    });

    if (!getAllBlogPosts) throw Error;

    res.status(200).json(getAllBlogPosts);
  } catch (err) {
    res
      .status(404)
      .json({ message: 'Post does not exist' });
  }
};
