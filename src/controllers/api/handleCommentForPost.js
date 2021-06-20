const handleCommentForPost = async (req, res) => {
  // get comment message from req body
  await Comment.create({
    user_id: req.session.user_id,
    post_id: req.body.post_id,
    message: req.body.message,
  });
  // insert new comment with userId and postId
  res.status(200).json({ message: "success" });
};

module.exports = handleCommentForPost;
