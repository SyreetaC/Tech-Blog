const handleDeletePost = (req, res) => {
  const { id } = req.params;
  Post.destroy({
    where: {
      id,
    },
  });
  res.json("delete post here");
};

module.exports = handleDeletePost;
