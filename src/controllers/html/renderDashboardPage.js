const renderDashboardPage = (req, res) => {
  // get all YOUR posts
  // send YOUR posts to handlebars
  res.render("dashboard");
};

module.exports = renderDashboardPage;
