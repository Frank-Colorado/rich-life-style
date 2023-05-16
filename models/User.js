const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {
  // This is an instance method called 'checkPassword'
  // It has 1 param called 'userPassword'
  // It's purpose is to check the userPassword against the hashedPassword
  async checkPassword(userPassword) {
    try {
    } catch (err) {}
  }
}

User.init(
  {
    // columns will go here
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [8] },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "user",
  }
);
