const config = require("config");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = config.get("server.PORT") || 7000;

const start = async () => {
  try {
    await mongoose.connect(config.get("db.url"), { retryWrites: true });
    app.listen(PORT, () => {
      console.log("server started on http://localhost:" + PORT);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
