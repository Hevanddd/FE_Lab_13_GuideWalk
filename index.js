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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/guide-walk/build'));
}
async function start() {
  try {
    await mongoose.connect('mongodb+srv://misha:mRnqceZdK10tA7nE@cluster0.oouvy.azure.mongodb.net/app_mock?retryWrites=true&w=majority', {
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
