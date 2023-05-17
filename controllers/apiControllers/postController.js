const { Post } = require("../../models");

// This route will be called with /api/posts (POST)
const createPost = async (req, res) => {
  try {
    // We create a new post with the title and content that was entered in the form
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      // We save the user_id to the session
      user_id: req.session.user_id,
      author: req.session.username,
    });
    // We send a response to the client with the post's information
    res.status(200).json({ post: newPost, message: "Post created!" });
  } catch (err) {
    // If anything goes wrong, on the server side
    // We catch it and send a response with the error message
    console.error({ err });
    res.status(500).json({ err });
    console.log("Problem with createPost");
  }
};

// This route will be called with /api/posts/:id (PUT)
const updatePost = async (req, res) => {
  try {
    // We update the post with the title and content that was entered in the form
    const updatedPost = await Post.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    // We send a response to the client with the post's information
    res.status(200).json({ post: updatedPost, message: "Post updated!" });
  } catch (err) {
    // If anything goes wrong, on the server side
    // We catch it and send a response with the error message
    console.error({ err });
    res.status(500).json({ err });
    console.log("Problem with updatePost");
  }
};

// This route will be called with /api/posts/:id (DELETE)
const deletePost = async (req, res) => {
  try {
    // We delete the post with the id that was sent to us in the params of the request
    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    // We send a response to the client with the post's information
    res.status(200).json({ post: deletedPost, message: "Post deleted!" });
  } catch (err) {
    // If anything goes wrong, on the server side
    // We catch it and send a response with the error message
    console.error({ err });
    res.status(500).json({ err });
    console.log("Problem with deletePost");
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
};
