const renderHomePage = (req, res) => {
  //get all posts
  Post.findAll({
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

  //TO DO send posts to handlebars
  res.render("homepage");
};

module.exports = renderHomePage;

//partials in views folder
