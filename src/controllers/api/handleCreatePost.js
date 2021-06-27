const { Post } = require("../../models");

const handleCreatePost = async (req, res) => {
  // get title and body from req body
  // insert new post with userId
  const newPost = await Post.create({
    title: req.body.title,
    body: req.body.body,
    user_id: req.session.userId,
  });

  res.render("dashboard", newPost);
  res.json("insert post here");
};

module.exports = handleCreatePost;
