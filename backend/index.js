const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
require("./db/mongoose");
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
