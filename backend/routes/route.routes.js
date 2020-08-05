const { Router } = require("express");

const Route = require("../models/Route");
const User = require("../models/User");
const Point = require("../models/Point");

const router = new Router();

router.get("/", async (req, res) => {
  try {
    //TODO: Add lazy loading
    const routes = await Route.find({}).limit(10);
    res.status(201).json(routes);
  } catch (e) {
    return res.status(500).json({ message: "Getting routes fault" + e });
  }
});

router.get("/user/:userId", async (req, res) => {
  try {
    //To get all user routes we are looking for routes with matching ownerID
    const routes = await Route.find({ owner: req.params.userId });
    res.json(routes);
  } catch (e) {
    return res.status(500).json({ message: "Something is going wrong." });
  }
});

router.get("/preview/:id", async (req, res) => {
  try {
    const route = await Route.findById(req.params.id);

    //to draw approximate area of the route we need to get all of coordinates of route points
    const coordinatesArray = route.points.map(async (pointId) => {
      const pointInfo = await Point.findById(pointId);
      return pointInfo.location;
    });

    res.json({ route, coordinatesArray });
  } catch (e) {
    return res.status(500).json({ message: "Something is going wrong." });
  }
});

router.post("/create", async (req, res) => {
  try {
    const { pointArray, routeInfo } = req.body;

    const pointIndexes = [];

    //to create route we firstly need to create all points
    //and then pass array of route ID's to route property 'points'

    pointArray.forEach(async (point) => {
      const pointToDB = new Point({
        name: point.title,
        location: point.location,
        description: point.description,
      });

      pointIndexes.push(pointToDB._id);
      await pointToDB.save();
    });

    const route = await Route.create({
      name: routeInfo.title,
      focus: routeInfo.focus,
      description: routeInfo.description,
      points: pointIndexes,
      owner: routeInfo.owner,
    });

    await ownerItem.save();

    res.status(201).json({ route });
  } catch (e) {
    return res.status(500).json({ message: e });
  }
});

//There are two different queries for editing route:
//GET query - to get all route data, including points data (because in route we only pass ID's)
//POST query - to update route and points data

router.get("/edit/:id", async (req, res) => {
  try {
    const route = await Route.findById(req.params.id);

    //here we are getting points data
    const points = route.points.map(async (pointId) => {
      return await Point.findById(pointId);
    });

    res.status(201).json({ route, points });
  } catch (e) {
    return res.status(500).json({ message: "Something is going wrong." });
  }
});

router.post("/edit", async (req, res) => {
  try {
    const {routeInfo, editedPoints} = req.body;

    const route = await Route.findById(routeInfo.id);

    //can we check changes on front-end?

    //firstly we are checking if route 'text' data is the same
    if (JSON.stringify(route) !== JSON.stringify(routeInfo)) {
      route.name = routeInfo.title;
      route.focus = routeInfo.focus;
      route.description = routeInfo.description;
    }

    //secondly we are checking if there are any newly created points (they came without id property)

    await route.save();
  } catch (e) {
    return res.status(500).json({ message: "Something is going wrong." });
  }
});

router.post("/next", async (req, res) => {
  try {
    // we are getting route id and point index ex 0,1,2,3 from front-end 
    const route = await Route.findById(req.body.routeId);
    
    //getting pointId by index in route array
    const pointId = route.points[req.body.pointIndex];

    const pointInfo = await Point.findById(pointId);

    res.status(201).json(pointInfo);
  } catch (error) {
    return res.status(500).json({ message: "Something is going wrong." });
  }
});

module.exports = router;
