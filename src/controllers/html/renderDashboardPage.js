const { Post, User, Comment } = require("../../models");

const renderDashboardPage = async (req, res) => {
  // get all YOUR posts
  const postsResult = await Post.findAll({
    where: {
      user_id: req.session.userId,
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
  // console.log(postsResult);
  // send YOUR posts to handlebars
  const posts = postsResult.map((post) => post.get({ plain: true }));
  console.log(posts);
  res.render("dashboard", { posts });
};

module.exports = renderDashboardPage;
