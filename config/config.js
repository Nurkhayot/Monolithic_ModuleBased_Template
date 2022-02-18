require("dotenv").config();
const { env } = process;

module.exports = {
  PORT: env.PORT || 8080,
  DATABASE: {
    host: env.HOST,
    user: env.USER,
    password: env.PASSWORD,
    database: env.DATABASE,
    port: env.DBPORT || 5432,
  },
  JWT_KEY: env.JWT_KEY,
};
