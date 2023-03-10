const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@expensetracker.zx67skw.mongodb.net/expensetracker?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to the database successfully");
  } catch (error) {
    console.log(error.message);
    console.log("Connecting to the database failed");
    process.exit(1);
  }
};

module.exports = { connectDB };
