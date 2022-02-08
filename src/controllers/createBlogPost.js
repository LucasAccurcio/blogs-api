const { BlogPosts, PostsCategories } = require('../models');

const newPost = (body, user) => {
  const { title, content } = body;
  const { id } = user;
  const userId = id;
  const obj = {
    title,
    content,
    userId,
    published: new Date(),
    updated: new Date(),
  };
  return obj;
};

const newPostCategories = async (blogPost, body) => {
  const { categoryIds } = body;
  const postId = blogPost.dataValues.id;
  const arrayPostCategories = categoryIds
  .map(async (categoryId) => {
    const createPostCat = await PostsCategories.create({ postId, categoryId });
    return createPostCat;
  });
  await Promise.all(arrayPostCategories);

  return arrayPostCategories;
};

const objReturn = (blogPost) => {
  const { id, userId, title, content } = blogPost.dataValues;

  return {
    id,
    userId,
    title,
    content,
  };
};

module.exports = async (req, res) => {
  try {
    const newBlogPost = newPost(req.body, req.user);

    const blogPost = await BlogPosts.create(newBlogPost);

    if (!blogPost) throw Error;

    const postIdCategories = newPostCategories(blogPost, req.body);
    console.log(postIdCategories);

    // const createPostCat = await PostsCategories.create(postIdCategories);
    // console.log(createPostCat);
    if (!postIdCategories) throw Error;

    const responseJson = objReturn(blogPost);

    res.status(201).json(responseJson);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error: Sorry, I can\'t create a Post for you' });
  }
};
