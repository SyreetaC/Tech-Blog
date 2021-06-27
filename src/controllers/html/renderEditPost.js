const Post = require("../../models/Post");

const renderEditPost = async (req, res) => {
  const { id } = req.params;

  const postFromModel = await Post.findByPk(id);

  const post = postFromModel.get({ plain: true });

  res.render("editPost", post);
};

module.exports = renderEditPost;
