/* eslint-disable no-undef */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db/index");
const productRouter = require("./routes/product.router");
const PORT = process.env.PORT || 8080;

const app = express();

var corsOptions = {
  origin: "http://127.0.0.1:5173/",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.on("error", console.error.bind("Mongoose connection error:"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to our food ordering app!" });
});

app.use("/api", productRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
