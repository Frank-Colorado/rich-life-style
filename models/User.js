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
