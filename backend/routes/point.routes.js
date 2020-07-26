const { Router } = require('express');
const Point = require('../models/Point');
const Route = require('../models/Route');

const router = new Router();

router.post('/add', async (req, res) => {
    try {
        const routeContainer = await Route.findById(req.body.route_id);

        const point = new Point({
            name: req.body.title,
            location: req.body.location,
            description: req.body.description,
        })

        await point.save();
        routeContainer.points.push(point);
        await routeContainer.save();

    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong.' })

    }
})

module.exports = router