const handleCreatePost = (req, res) => {
  // get title and body from req body
  // insert new post with userId
  Post.create({
    title: req.body.title,
    body: req.body.body,
    user_id: req.session.user_id,
  });
  res.json("insert post here");
};

module.exports = handleCreatePost;
