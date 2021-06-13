const renderPostPage = (req, res) => {
  // get post by ID with associated user and comments
  // send YOUR data to handlebars
  res.render("post");
};

module.exports = renderPostPage;