const mongoose = require("mongoose");
const express = require("express");
const userRouter = require("./routes/user.routes");

const app = express();
const PORT = 5081

app.use(express.json())

mongoose
  .connect()
  .then(() => console.log("Connected Successfully!"))
  .catch(() => console.log("Failed graciously!"));

app.use("/user", userRouter)

app.listen(PORT, ()=> {
    console.log("Running on localhost:"+PORT)
})