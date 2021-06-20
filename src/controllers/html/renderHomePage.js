const { Post, User, Comment } = require("../../models");

const renderHomePage = async (req, res) => {
  //get all posts
  const postsFromModel = await Post.findAll({
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
  const { isLoggedIn } = req.session;

  //TO DO send posts to handlebars
  const posts = postsFromModel.map((post) => post.get({ plain: true }));
  console.log(posts);
  res.render("homepage", { isLoggedIn, posts });
};

module.exports = renderHomePage;

//partials in views folder
