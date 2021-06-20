const { Post, Comment } = require("../../models");

const renderPostPage = async (req, res) => {
  // get post by ID with associated user and comments
  const post = await Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "body", "user_id"],
    include: [
      {
        model: User,
        as: "user",
        attributes: ["username"],
      },
      {
        model: Comment,
        as: "comments",
        attributes: ["id", "message", "user_id"],
        include: [
          {
            model: User,
            as: "user",
            attributes: ["username"],
          },
        ],
      },
    ],
  });
  // send YOUR data to handlebars
  res.render("post", post);
};

module.exports = renderPostPage;
