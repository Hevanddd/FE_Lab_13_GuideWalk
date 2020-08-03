const { Router } = require("express");
const User = require("../models/User");

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const { username } = req.body;

    let user = await User.findOne({ username });

    if (!user) {
      const newUser = new User({ username, user_routes: [], saved_routes: [] });
      await newUser.save();
      user = await User.findOne({ username });
    }
    res.status(201).json({ user });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Something is going wrong. Try it again." });
  }
});

router.post("/addSaved", async (req, res) => {
  try {
    const { savedId, userId } = req.body;

    const user = await User.findById(userId);

    user.saved_routes.push(savedId);

    user.save();
  } catch (e) {
    res
      .status(500)
      .json({ message: "Something is going wrong. Try it again." });
  }
});

router.post("/addSaved", async (req, res) => {
  try {
    const { savedId, userId } = req.body;

    const user = await User.findById(userId);

    user.saved_routes.push(savedId);

    user.save();
  } catch (e) {
    res
      .status(500)
      .json({ message: "Something is going wrong. Try it again." });
  }
});

module.exports = router;