const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();
app.use(express.json({ extended: true }));

app.get("/", async (req, res) => {
  res.json({ message: "im here" });
});

app.use("/api/route", require("./routes/route.routes"));
app.use("/api/user", require("./routes/user.routes"));

const PORT = process.env.PORT || config.get("port") || 5000;

async function start() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => {
      console.log(`App has been started on port ${PORT}...`);
    });
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}

start();
