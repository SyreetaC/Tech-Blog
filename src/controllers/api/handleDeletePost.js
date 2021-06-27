const { Post } = require("../../models");

const handleDeletePost = (req, res) => {
  const { id } = req.params;
  console.log(id);
  Post.destroy({
    where: {
      id,
    },
  });
  res.json("delete post here");
};

module.exports = handleDeletePost;
