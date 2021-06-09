const renderHomePage = (req, res) => {
  res.render("homepage", { posts });
};

module.exports = renderHomePage;
