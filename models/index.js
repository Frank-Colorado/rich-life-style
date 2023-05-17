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

module.exports = { User, Post, Comment };
