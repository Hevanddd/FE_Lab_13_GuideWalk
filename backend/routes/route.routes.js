const { Router } = require("express");

const Route = require("../models/Route");
const Point = require("../models/Point");

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const routes = await Route.find({}).limit(10);
    res.status(201).json(routes);
  } catch (e) {
    return res.status(500).json({ message: "Something is going wrong." });
  }
});

router.get("/user/:userId", async (req, res) => {
  try {
    const routes = await Route.find({ owner: req.params.userId });
    res.json(routes);
  } catch (e) {
    return res.status(500).json({ message: "Something is going wrong." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const route = await Route.findById(req.params.id);

    const coordinatesArray = route.points.map(pointId => {
      const pointInfo = await Point.findById(pointId);
      return pointInfo.location;
    })

    res.json(route, coordinatesArray);
  } catch (e) {
    return res.status(500).json({ message: "Something is going wrong." });
  }
});

router.post("/createRoute", async (req, res) => {
  try {
    const { pointArray, routeInfo } = req.body;

    const route = new Route({
      name: routeInfo.title,
      focus: routeInfo.focus,
      description: routeInfo.description,
      points: [],
      owner: routeInfo.owner,
    });

    pointArray.forEach((point) => {

      const pointToDB = new Point({
        name: point.title,
        location: point.location,
        description: point.description,
      });

      pointToDB.save((err, point) => route.points.push(point._id));
    });
    
    await route.save();

    res.status(201).json({ message: "Route was created." });
  } catch (e) {
    return res.status(500).json({ message: "Something went wrong." });
  }
});

router.post("/editRoute", async (req, res) => {
  try {
    const route = await Route.findById(req.body.id);
    route.name = req.body.title;
    route.focus = req.body.focus;
    route.description = req.body.description;
    route.points = req.body.points;

    await route.save();
  } catch (e) {
    return res.status(500).json({ message: "Something is going wrong." });
  }
});

router.post('/getNext', async (req, res) => {
  try {
    const route = await Route.findById(req.body.id);
    const pointId = route.points[req.body.index];

    const pointInfo = await Point.findById(pointId);
    res.status(201).json(pointInfo);

  } catch (error) {
    return res.status(500).json({ message: "Something is going wrong." });
  }
})

module.exports = router;
