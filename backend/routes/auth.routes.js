const { Router } = require('express');
const User = require('../models/User')

const router = new Router();

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        const candidate = await User.findOne({ email });

        if (candidate) {
            return res.status(400).json({ message: 'User already exist' })
        }

    } catch (e) {
        res.status(500).json({ message: 'Something is going wrong. Try it again.' })
    }
})

router.login('/login', async (req, res) => {

})

module.exports = router; 