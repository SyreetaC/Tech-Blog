const Comment = require("../../models");

const handleCommentForPost = async (req, res) => {
  // get comment message from req body
  const { id } = req.params;
  const { userId } = req.session;
  const { message } = req.body;

  const comment = {
    user_id: userId,
    post_id: id,
    message,
  };

  await Comment.create(comment);

  res.status(200).json({ message: "success" });
};

module.exports = handleCommentForPost;
