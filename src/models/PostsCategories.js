module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define(
    'PostsCategories', {}, { timestamps: false },
  );
  PostsCategories.associate = (models) => {
    models.Blogposts.belongsToMany(models.Categories, {
      as: 'categories',
      through: PostsCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.Surgeries.belongsToMany(models.Patients, {
      as: 'blogposts',
      through: PostsCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };
  return PostsCategories;
};
