const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      references: {
        model: "user",
        key: "username",
      },
    },
    user_id: {
      type: DataTypes.UUID,
      references: {
        model: "user",
        key: "id",
      },
    },
    post_id: {
      type: DataTypes.UUID,
      references: {
        model: "post",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "comment",
  }
);

module.exports = Comment;
