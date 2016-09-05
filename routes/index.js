/**
 * Created by darebeat on 15-12-2.
 */
var express = require('express');
var router = express.Router();
// var TXAction = require('../actions/TXAction');
// var RXAction = require('../actions/RXAction');

router.get('/', function(req, res) { res.render('index', { title : 'Home' } ); });
router.get('/login', function(req, res) { res.render('login', { title : 'Login' } ); });
router.get('/regist', function(req, res) { res.render('regist', { title : 'Regist' } ); });
router.get('/upload', function(req, res) { res.render('upload'); });

module.exports = router;
