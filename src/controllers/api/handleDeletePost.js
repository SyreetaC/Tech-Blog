const { Post } = require("../../models");

const handleDeletePost = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const data = await Post.destroy({
    where: {
      id,
    },
  });
  return res.status(200).json({ data: "Delete successful" });
};

module.exports = handleDeletePost;
