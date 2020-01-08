let express = require('express');
let router = express.Router();
let debug = require('debug')('server:exercises');

// POST add exercise 
router.post('/add', function(req, res, next) {
    res.json({ hello: 'hello' });
});

// POST add user (temporary way to add a user for now..)
router.post('/new-user', function(req, res, next) {

});



//get api/exercise/log?{userId}[&from][&to][&limit]
// {} = required, [] = optional
// from, to = dates(yyyy-mm-dd); limit = number
// GET add user (temporary way to add a user for now..)
router.post('/log', function(req, res, next) {

});




module.exports = router;