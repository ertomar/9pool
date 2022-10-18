require("dotenv").config();
const cors = require("cors");
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
var morgan = require("morgan");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());

const routes = require("./routes/routes");

app.use(
  "/",
  router.get("/", function (req, res) {
    res.send("9 Pool server is live");
  })
);
app.use("/api", routes);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
