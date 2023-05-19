const { Comment } = require("../../models");

const router = require("express").Router();

// This route will be called with /api/posts (POST)
const createComment = async (req, res) => {
  try {
    // We create a new post with the title and content that was entered in the form
    const newComment = await Comment.create({
      content: req.body.content,
      // We save the user_id to the session
      user_id: req.session.user_id,
    });
    // We send a response to the client with the post's information
    res.status(200).json({ comment: newComment, message: "Comment created!" });
  } catch (err) {
    // If anything goes wrong, on the server side
    // We catch it and send a response with the error message
    console.error({ err });
    res.status(500).json({ err });
    console.log("Problem with createComment");
  }
};

// This route will be called with /api/posts/:id (PUT)
const updateComment = async (req, res) => {
  try {
    // We update the post with the title and content that was entered in the form
    const updatedComment = await Comment.update(
      {
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    // We send a response to the client with the post's information
    res
      .status(200)
      .json({ comment: updatedComment, message: "Comment updated!" });
  } catch (err) {
    // If anything goes wrong, on the server side
    // We catch it and send a response with the error message
    console.error({ err });
    res.status(500).json({ err });
    console.log("Problem with updateComment");
  }
};

// This route will be called with /api/posts/:id (DELETE)
const deleteComment = async (req, res) => {
  try {
    // We delete the post with the id that was sent to us in the params of the request
    const deletedComment = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    // We send a response to the client with the post's information
    res
      .status(200)
      .json({ comment: deletedComment, message: "Comment deleted!" });
  } catch (err) {
    // If anything goes wrong, on the server side
    // We catch it and send a response with the error message
    console.error({ err });
    res.status(500).json({ err });
    console.log("Problem with deleteComment");
  }
};

module.exports = {
  createComment,
  updateComment,
  deleteComment,
};
