const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// User Associations with Post
User.hasMany(Post, {
  foreignKey: "user_id",
  foreignKey: "author",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  foreignKey: "author",
});

// User Associations with Comment
User.hasMany(Comment, {
  foreignKey: "user_id",
  foreignKey: "author",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

// Post Associations with Comment
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Comment };
