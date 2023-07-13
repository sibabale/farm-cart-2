const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL || `mongodb+srv://jojasibabale:${process.env.MONGO_PASSWORD}@farm-cart-cluster.gs3sp7j.mongodb.net/?retryWrites=true&w=majority`;  

mongoose.connection.once("open", async () => {
  await console.log("MongoDB connection ready");
});

mongoose.connection.on("error", (error) => {
  console.error("Error connecting to MongoDB: ", error);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisonnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisonnect,
};
