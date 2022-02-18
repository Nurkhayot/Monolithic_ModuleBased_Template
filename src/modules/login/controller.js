const { sign } = require("../../utils/jsonwebtoken.js");

const loginModel = require("./model");

module.exports = {
  POST: async (req, res) => {
    try {
      const { username, password } = req.body;

      //error handling
      if (username.trim() === "" || password.trim() === "") {
        throw new Error("Input must not be an empty string");
      }

      const user = await loginModel.find(req);

      if (user) {
        res.status(200).send({
          status: 200,
          data: {
            user: user,
            token: sign(user.id),
          },
        });
      } else {
        //error handling 2
        throw new Error("User is not defined");
      }
    } catch (error) {
      res.status(500).send({
        status: 500,
        error: error.message,
      });
    }
  },
};
