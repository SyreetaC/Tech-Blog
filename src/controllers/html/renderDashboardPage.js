const { Post, User, Comment } = require("../../models");

const renderDashboardPage = (req, res) => {
  // get all YOUR posts
  Post.findAll({
    where: {
      user_id: req.session.id,
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
  // send YOUR posts to handlebars
  res.render("dashboard");
};

module.exports = renderDashboardPage;
