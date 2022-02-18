const { verify } = require("../utils/jsonwebtoken");
const { JWT_KEY } = require("../../config/config.js");
const { fetchOne } = require("../utils/postgres");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (token) {
      try {
        const userId = verify(token, JWT_KEY);

        const isUser = await fetchOne(
          `SELECT * FROM users WHERE id = $1`,
          userId
        );

        if (!isUser) {
          throw new Error("User is not defined");
        }

        next();
      } catch (error) {
        //error handling
        throw new Error(error.message);
      }
    } else {
      throw new Error("Authorization header must be provided");
    }
  } catch (error) {
    //error handling
    res.status(500).send({
      status: 401,
      error: error.message,
    });
  }
};
