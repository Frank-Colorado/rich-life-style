const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {
  // This is an instance method called 'checkPassword'
  // It has 1 param called 'userPassword'
  // It's purpose is to check the userPassword against the hashedPassword
  async checkPassword(userPassword) {
    try {
      return await bcrypt.compare(userPassword, this.password);
    } catch (err) {
      console.log({ err });
    }
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
      validate: { len: [3, 15] },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [8] },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
  },
  {
    // hooks will go here
    hooks: {
      // This is a hook that will automatically run before a new user is created
      beforeCreate: async (newUserData) => {
        try {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          newUserData.username = newUserData.username.toLowerCase().trim();
          newUserData.email = newUserData.email.toLowerCase().trim();
          return newUserData;
        } catch (err) {
          console.log({ err });
        }
      },
      // This is a hook that will automatically run before a user is updated
      beforeUpdate: async (updatedUserData) => {
        try {
          if (updatedUserData.includes("password")) {
            updatedUserData.password = await bcrypt.hash(
              updatedUserData.password,
              10
            );
          }

          if (updatedUserData.includes("username")) {
            updatedUserData.username = updatedUserData.username
              .toLowerCase()
              .trim();
          }

          if (updatedUserData.includes("email")) {
            updatedUserData.email = updatedUserData.email.toLowerCase().trim();
          }
          return updatedUserData;
        } catch (err) {
          console.log({ err });
        }
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: "user",
  }
);

module.exports = User;
