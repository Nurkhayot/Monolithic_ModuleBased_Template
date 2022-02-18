const { verify } = require("../utils/jsonwebtoken");
const { JWT_KEY } = require("../../config/config.js");
const { fetchOne } = require("../utils/postgres");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (token) {
      try {
        const userId = verify(token, JWT_KEY);

        const isAdmin = await fetchOne(
          `select * from users where id = $1 and is_deleted = false and is_admin = true`,
          userId
        );

        //error handling
        if (!isAdmin) {
          throw new Error("Only admin is allowed");
        }
        next();
      } catch (error) {
        //error handling
        throw new Error(error.message);
      }
    } else {
      //error handling
      throw new Error("Authorization header must provided");
    }
  } catch (error) {
    //error handling
    res.status(401).send({
      status: 401,
      error: error.message,
    });
  }
};
