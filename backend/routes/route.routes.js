const { Router } = require("express");

const Route = require("../models/Route");

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const routes = await Route.find({});
    res.json(routes);
  } catch (e) {
    return res.status(500).json({ message: "Something is going wrong." });
  }
});

router.get("/user/:userId", async (req, res) => {
  try {
    const route = await Route.find({ owner: req.params.userId });
    res.json(route);
  } catch (e) {
    return res.status(500).json({ message: "Something is going wrong." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const routes = await Route.findById(req.params.id);
    res.json(routes);
  } catch (e) {
    return res.status(500).json({ message: "Something is going wrong." });
  }
});

router.post(
  "/createRoute",
  [
    // Here will be validators
  ],
  async (req, res) => {
    try {
      const route = new Route({
        name: req.body.title,
        focus: req.body.focus,
        description: req.body.description,
        points: req.body.points,
        owner: req.body.owner,
      });
      await guide.save();

      res.status(201).json({ message: "Route was created." });
    } catch (e) {
      return res.status(500).json({ message: "Something went wrong." });
    }
  }
);

router.post(
  "/editRoute",
  [
    // Here will be validators
  ],
  async (req, res) => {
    try {
      const route = await Route.findById(req.body.id);
      route.name = req.body.title;
      route.focus = req.body.focus;
      route.description = req.body.description;
      route.points = req.body.points;

      await guide.save();
    } catch (e) {
      return res.status(500).json({ message: "Something is going wrong." });
    }
  }
);

module.exports = router;
