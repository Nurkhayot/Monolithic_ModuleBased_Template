const router = require("express").Router();
const { POST } = require("./controller");

router.post("/", POST);

module.exports = router;
