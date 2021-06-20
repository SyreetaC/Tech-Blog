const moment = require("moment");

const formatDateTime = (dateTime) => {
  return moment(dateTime).format("ddd Do MMM YYYY");
};

module.exports = { formatDateTime };
