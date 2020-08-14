const { Router } = require("express");
const User = require("../models/User");
const Route = require("../models/Route");
const Point = require("../models/Point");

const router = new Router();

router.get("/saved/:userid", async (req, res) => {
  try {
    const user = await User.findById(req.params.userid);

    const savedRoutes = await Promise.all(
      user.saved_routes.map(async (routeId) => await Route.findById(routeId))
    );

    res.status(200).json(savedRoutes);
  } catch (error) {
    res.status(500).json({ message: "Saved routes fault" + error });
  }
});

router.get("/myroutes/:userid", async (req, res) => {
  try {
    const user = await User.findById(req.params.userid);

    const myRoutes = await Promise.all(
      user.user_routes.map(async (routeId) => await Route.findById(routeId))
    );

    res.status(200).json(myRoutes);
  } catch (error) {
    res.status(500).json({ message: "My routes fault" + error });
  }
});

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

router.post("/toggle-saved", async (req, res) => {
  try {
    const { routeId, userId } = req.body;

    const user = await User.findById(userId);

    if (!user.saved_routes.includes(routeId)) {
      user.saved_routes.push(routeId);
      await user.save();
      return res.status(201).json({ message: "Route saved" });
    }
    const index = user.saved_routes.indexOf(routeId);

    user.saved_routes.splice(index, 1);

    await user.save();
    return res
      .status(200)
      .json({ message: "Route succesfully removed from saved" });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Something is going wrong. Try it again." });
  }
});

router.post("/delete-route", async (req, res) => {
  try {
    const { userId, routeId } = req.body;

    //deleting route from collection
    await Route.findByIdAndDelete(routeId);
    //deleting route from userOwner user_routes

    const userOwner = await User.findById(userId);

    const index = userOwner.user_routes.indexOf(routeId);

    if (index > -1) {
      userOwner.user_routes.splice(index, 1);
    }

    await userOwner.save();

    //deleting route from saved routes of users who saved it
    const usersSavers = await User.find({ saved_routes: routeId });
    await Promise.all(
      usersSavers.map(async (userSaver) => {
        const indexSaved = userSaver.saved_routes.indexOf(routeId);

        if (indexSaved > -1) {
          userSaver.saved_routes.splice(indexSaved, 1);
        }
        await userSaver.save();
      })
    );

    res.status(200).json({ message: "Route succesfully deleted" });
  } catch (error) {
    res.status(500).json({ message: "Deleting route error: " + error });
  }
});

module.exports = router;
