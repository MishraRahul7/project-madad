const express = require("express");
const cors = require("cors");

require("./db/mongoose");
const userRouter = require("./routes/user");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRouter);
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});
