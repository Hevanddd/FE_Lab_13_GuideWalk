const { Router } = require("express");

const Route = require("../models/Route");
const User = require("../models/User");
const Point = require("../models/Point");

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const { size = 10, page = 0 } = req.query;
    const querySize = size * (page + 1);
    const routesCollection = await Route.find({}).sort({rating: -1}).limit(querySize);

    res.status(201).json(routesCollection.slice(size * page));

  } catch (e) {
    return res.status(500).json({ message: "Getting routes fault " + e });
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

    Promise.all(coordinatesArray).then((coordinatesArrayValue) =>
      res.json({ route, coordinatesArrayValue })
    );
  } catch (e) {
    return res.status(500).json({ message: "Something is going wrong." });
  }
});

router.post("/create", async (req, res) => {
  try {
    const { pointArray, routeInfo } = req.body;

    //to create route we firstly need to create all points
    //and then pass array of route ID's to route property 'points'

    const pointIndexes = await Promise.all(
      pointArray.map(async (point) => {
        const pointToDB = new Point({
          name: point.name,
          location: point.location,
          description: point.description,
        });

        await pointToDB.save();
        return pointToDB._id;
      })
    );

    const route = await Route.create({
      name: routeInfo.name,
      focus: routeInfo.focus,
      description: routeInfo.description,
      points: pointIndexes,
      userRateIds: [],
      ownerName: routeInfo.ownerName,
    });

    const ownerItem = await User.findById(routeInfo.owner);
    ownerItem.user_routes.push(route._id);

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
    const points = await Promise.all(
      route.points.map(async (pointId) => {
        return await Point.findById(pointId);
      })
    );

    res.status(201).json({ route, points });
  } catch (e) {
    return res.status(500).json({ message: "Something is going wrong." });
  }
});

router.post("/edit", async (req, res) => {
  try {
    const { pointArray, routeInfo } = req.body;

    const pointIndexes = await Promise.all(
      pointArray.map(async (pointFromForm) => {
        if (pointFromForm.id) {
          const point = Point.findById(pointFromForm.id);
          point.name = point.name;
          point.location = point.location;
          point.description = point.description;
          await point.save();
          return pointFromForm.id;
        }
        //if user added new point
        const pointNew = new Point({
          name: pointFromForm.name,
          location: pointFromForm.location,
          description: pointFromForm.description,
        });
        await pointNew.save();
        return pointNew._id;
      })
    );

    const route = await Route.findById(routeInfo.id);
    route.name = routeInfo.name;
    route.focus = routeInfo.focus;
    route.description = routeInfo.description;
    route.points = pointIndexes;

    await route.save();

    res.status(200).json(route);
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

    const { name, location, description } = pointInfo;

    const pointsLeft = route.points.length - req.body.pointIndex - 1;

    res
      .status(201)
      .json({ routeName: route.name, pointsLeft, name, location, description });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

router.post("/rate", async (req, res) => {
  try {
    const { routeId, userId } = req.body;

    const route = await Route.findById(routeId);

    if (route.userRateIds.includes(userId)) {
      route.rating -= 1;

      const index = route.userRateIds.indexOf(userId);

      route.userRateIds.splice(index, 1);
    } else {
      route.rating += 1;
      route.userRateIds.push(userId);
    }

    await route.save();

    return res
      .status(201)
      .json({ userRateIds: route.userRateIds, rating: route.rating });
  } catch (error) {
    res.status(500).json({ message: "Rating error " + error });
  }
});

module.exports = router;
