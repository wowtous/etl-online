/**
 * Created by darebeat on 15-12-2.
 */
var express = require('express');
var app = express.Router();
var multer = require('multer');

app.post('/upload',multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, __dirname+'/../public/uploads');
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    })
}).any(),function(req,res){
    res.redirect('/upload');
});

module.exports = app;
