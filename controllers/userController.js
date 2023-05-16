const { User } = require("../models");

const createUser = async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });
    res.status(200).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
    console.log("Problem with createUser");
  }
};
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByPk(req.params.id);
    updatedUser.username = req.body.username;
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
    console.log("Problem with updateUser");
  }
};
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByPk(req.params.id);
    await deletedUser.destroy();
    res.status(200).json(deletedUser);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
    console.log("Problem with deleteUser");
  }
};
module.exports = {
  createUser,
  updateUser,
  deleteUser,
};
