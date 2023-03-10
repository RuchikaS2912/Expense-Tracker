const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const apiRoutes = require("./routes/apiRoutes");
const { connectDB } = require("./db/database");

// use middleware
app.use(cors());
app.use(express.json());

// connecting to the database
connectDB();

app.get("/", async (req, res, next) => {
  res.json({ message: "API Running" });
});

// use routes
app.use("/api/v1", apiRoutes);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
