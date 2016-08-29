/**
 * Created by darebeat on 15-12-2.
 */
var express = require('express');
var router = express.Router();
router.get('/', function(req, res) {
    res.render('index',
        { title : 'Home' }
    );
});
router.get('/about', function(req, res) {
    res.send('Welcome to the about page!');
});
module.exports = router;
