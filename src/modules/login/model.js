const { fetchOne } = require("../../utils/postgres");
const loginQuery = require("./query.js");

const find = ({ body: { username, password } }) => {
  return fetchOne(loginQuery.find, username, password);
};

module.exports = {
  find,
};
