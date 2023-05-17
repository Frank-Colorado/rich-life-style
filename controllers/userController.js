const { User } = require("../models");

const createUser = async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.username = newUser.username;
      req.session.logged_in = true;
      res.status(200).json({ user: newUser, message: "Signed up!" });
    });
  } catch (err) {
    res.status(400).json({ err });
    console.log("Problem with createUser");
  }
};

// This is a function called loginUser that will be called with /api/users/login
const loginUser = async (req, res) => {
  try {
    // We search the User model for a user with the username that was entered in the login form
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    // If the username is not found, we return an error message
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" });
      return;
    }
    // After we find a user with the username that was sent to us
    // We check the password that the user sent us with the checkPassword instance method
    const validPassword = await dbUserData.checkPassword(req.body.password);
    // If the password is not valid (doesn't match the hashed password in the database), we return an error message
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" });
      return;
    }
    // If the username and password are valid, we save the user's id to the session
    req.session.save(() => {
      // We save the user's id to the session
      req.session.user_id = dbUserData.id;
      // We save the user's username to the session
      req.session.username = dbUserData.username;
      // We save the user's logged_in status to the session as true
      req.session.logged_in = true;
      // We send a response to the client with the user's information
      res.status(200).json({ user: dbUserData, message: "Logged in" });
    });
    // If anything goes wrong, on the server side
    // We catch it and send a response with the error message
  } catch (err) {
    console.error(err);
    // The error status is 500 for a server error
    res.status(500).json({ err });
    console.log("Problem with loginUser");
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
