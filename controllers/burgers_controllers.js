const express = require('express');
const orm = require('../config/orm');
const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require('../models/burger');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
    burger.selectAll((data) => {
        console.log(data);
        const burgerObject = {
            burgers: data,
        };
        res.render('index', burgerObject);
    });
});

router.post('/api/burgers', (req, res) => {
    console.log(req.body);
    burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

// router.put('/api/burgers/:id', (req, res) => {

// });

// Export routes for server.js to use.
module.exports = router;