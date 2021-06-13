const renderHomePage = (req, res) => {
  //get all posts
  //send posts to handlebars
  res.render("homepage");
};

module.exports = renderHomePage;

//partials in views folder
