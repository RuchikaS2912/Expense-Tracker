const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8080;
const cors = require("cors");
const apiRoutes = require("./routes/apiRoutes");
const { connectDB } = require("./db/database");
// app.set('views', path.join(__dirname, ''));
app.use(express.static("../client/build"));
// use middleware
app.use(cors());
app.use(express.json());

// connecting to the database
connectDB();

console.log("Running the server");
app.get("/", async (req, res, next) => {
  res.sendFile("index.html");
});

// use routes
app.use("/api/v1", apiRoutes);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

module.exports = app;
