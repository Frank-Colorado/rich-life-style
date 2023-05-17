const { User } = require("../models");

// This is a function called createUser that will be called with /api/users/signup
const createUser = async (req, res) => {
  try {
    // We create a new user with the username, password, and email that was entered in the signup form
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });
    // After we create a new user, we create a session for the user
    req.session.save(() => {
      // We save the user's id to the session
      req.session.user_id = newUser.id;
      // We save the user's username to the session
      req.session.username = newUser.username;
      // We save the user's logged_in status to the session as true
      req.session.logged_in = true;
      // We send a response to the client with the user's information
      res.status(200).json({ user: newUser, message: "Signed up!" });
    });
  } catch (err) {
    // If anything goes wrong, on the server side
    // We catch it and send a response with the error message
    console.error({ err });
    res.status(500).json({ err });
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
    // If the username and password are valid, we create a session for the user
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
  } catch (err) {
    // If anything goes wrong, on the server side
    // We catch it and send a response with the error message
    console.error({ err });
    // The error status is 500 for a server error
    res.status(500).json({ err });
    console.log("Problem with loginUser");
  }
};

// This is a function called logoutUser that will be called with /api/users/logout
const logoutUser = async (req, res) => {
  try {
    // If the user is logged in, we destroy the session
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      // If the user is not logged in, we send a 404 error
      res.status(404).end();
    }
  } catch (err) {
    // If any serverside error occurs, we catch it and send a response with the error message
    console.error(err);
    res.status(500).json(err);
    console.log("Problem with logoutUser");
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
    const deletedUser = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deletedUser) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }
    res.status(200).json(deletedUser);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
    console.log("Problem with deleteUser");
  }
};
module.exports = {
  createUser,
  loginUser,
  logoutUser,
  updateUser,
  deleteUser,
};
