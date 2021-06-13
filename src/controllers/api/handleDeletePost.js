const handleDeletePost = (req, res) => {
  // get id from req params
  // destroy post
  Post.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json("delete post here");
};

module.exports = handleDeletePost;
