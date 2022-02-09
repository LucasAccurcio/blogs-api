const { BlogPosts, Categories } = require('../models');

module.exports = async (req, res) => {
  try {
    const { title, content } = req.body;
    const getBlogPostsUpdated = await BlogPosts.update({ title, content },
      { where: { id: req.params.id, userId: req.user.id } });
      console.log(getBlogPostsUpdated);
    if (!getBlogPostsUpdated) throw Error;

    const getResponse = await BlogPosts.findOne({
      where: { id: req.params.id },
      include: [{ model: Categories, as: 'categories', through: { attributes: [] } }],
    });

    if (!getResponse) throw Error;

    res.status(200).json(getResponse);
  } catch (err) {
    res
      .status(404)
      .json({ message: 'Post does not exist' });
  }
};
