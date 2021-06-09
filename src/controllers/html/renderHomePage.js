const homePage = require("../../views/layouts/homepage.handlebars");
const renderHomePage = (req, res) => {
  res.render("homepage");
};

module.exports = renderHomePage;
