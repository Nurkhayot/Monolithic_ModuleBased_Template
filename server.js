const app = require("./src/index");
const { PORT } = require("./config/config");

app.listen(PORT, console.log("http://localhost:" + PORT));
