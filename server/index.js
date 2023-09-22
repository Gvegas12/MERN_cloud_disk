const config = require("config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");

const authRouter = require("./routes/auth.routes");
const fileRouter = require("./routes/file.routes");

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/files", fileRouter);

const PORT = config.get("server.PORT") || 7000;

const start = async () => {
  try {
    await mongoose.connect(config.get("db.url"), { retryWrites: true });

    app.listen(PORT, () => {
      const rootFilesPath = config.get("server.file_path");
      if (!fs.existsSync(rootFilesPath)) {
        fs.mkdirSync(rootFilesPath);
      }
      
      console.log("server started on http://localhost:" + PORT);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
