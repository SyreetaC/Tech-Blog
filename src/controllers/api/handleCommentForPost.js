const handleCommentForPost = (req, res) => {
  // get comment message from req body
  Comment.create({
    user_id: req.session.user_id,
    post_id: req.body.post_id,
    message: req.body.message,
  });
  // insert new comment with userId and postId
  res.json("insert comment to comment table with all data");
};

//TO DO update/ delete comments here?

module.exports = handleCommentForPost;
