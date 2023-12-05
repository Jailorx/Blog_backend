const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URL, { dbName: process.env.DB_NAME })
  .then(() => {
    console.log(`Connected to db`);
  })
  .catch((err) => {
    console.log(`Error connecting to database`);
  });
