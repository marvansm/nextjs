const mongoose = require("mongoose");

const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = ConnectDb;
