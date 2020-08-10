const { Router } = require("express");
const User = require("../models/User");
const Route = require("../models/Route");

const router = new Router();

router.post("/", async (req, res) => {
  try {
    const username = req.body.username;

    let user = await User.findOne({ username });

    if (!user) {
      const newUser = await new User({
        username,
        user_routes: [],
        saved_routes: [],
      });
      await newUser.save();
      res.status(201).json({
        id: newUser._id,
        user_routes: newUser.user_routes,
        saved_routes: newUser.saved_routes,
      });
    } else {
      res.status(201).json({
        id: user._id,
        user_routes: user.user_routes,
        saved_routes: user.saved_routes,
      });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

router.post("/add-saved", async (req, res) => {
  try {
    const { savedId, userId } = req.body;

    const user = await User.findById(userId);

    if (!user.saved_routes.includes(savedId)) {
      user.saved_routes.push(savedId);
      await user.save();
      res.status(201).json({ message: "Route saved" });
    }
    res.status(208).json({ message: "Route is already in featured" });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Something is going wrong. Try it again." });
  }
});

router.post("/delete-saved", async (req, res) => {
  try {
    const { userId, savedId } = req.body;

    const user = await User.findById(userId);

    const index = user.saved_routes.indexOf(savedId);

    if (index > -1) {
      user.saved_routes.splice(index, 1);
    }

    await user.save();

    res.status(200).json({ message: "Route succesfully removed from saved" });
  } catch (error) {
    res.status(500).json({ message: "Deleting saved route error: " + error });
  }
});

router.post("/delete-route", async (req, res) => {
  try {
    const { userId, routeId } = req.body;

    const user = await User.findById(userId);

    await Route.findByIdAndDelete(routeId);

    const index = user.user_routes.indexOf(routeId);

    if (index > -1) {
      user.user_routes.splice(index, 1);
    }

    await user.save();

    res.status(200).json({ message: "Route succesfully deleted" });
  } catch (error) {
    res.status(500).json({ message: "Deleting route error: " + error });
  }
});

module.exports = router;
