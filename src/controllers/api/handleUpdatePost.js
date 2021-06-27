const handleEditPosts = () => {
  console.log("hello");
  try {
    const { title, body } = req.body;
    const { id } = req.params;

    const post = { title, body };

    const [updated] = await Post.update(post, { where: { id } });

    if (!updated) {
      return res.status(404).json({ error: "Post does not exist" });
    }
    return res.status(200).json({ data: "Update successful" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: "Failed to update post" });
  }
};

module.exports = handleEditPosts;
