const { Post, User, Comment } = require("../../models");

const renderHomePage = async (req, res) => {
  //get all posts
  const posts = await Post.findAll({
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
      },
    ],
  });

  // console.log(posts);
  //TO DO send posts to handlebars
  res.render("homepage");
};

module.exports = renderHomePage;

//partials in views folder
