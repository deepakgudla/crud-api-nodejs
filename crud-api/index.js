const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const userRouter = require("./routes/userRoutes");
const templateRouter = require("./routes/templateRoutes");
const cors = require("cors");
app.use(express.json());
app.use(cors({origin: '*'}));
app.use("/", userRouter);
app.use("/", templateRouter);


const PORT = process.env.PORT;
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    app.listen(PORT, () => {
      console.log("server running on port no. " + PORT);
      console.log("database connected successfully");
    });
  })
  .catch((err) => {
    console.log(err);
  });
