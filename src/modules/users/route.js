const router = require("express").Router();
const { GET, PUT, POST, DELETE, SEARCH } = require("./controller");

//middlewares
const authUser = require("../../middlewares/authUser");
const authAdmin = require("../../middlewares/authAdmin");

//subroutes of http://localhost:8000/users
router.get("/", GET);

module.exports = router;
