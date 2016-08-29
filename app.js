/**
 * Created by darebeat on 15-12-2.
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

var index = require('./routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.enable('trust proxy');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));


//prevent 304 not modify
app.use(function (req, res, next) {
    req.headers['if-none-match'] = 'no-match-for-this';
    next();
});

app.use('/', index);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        console.log('fatal error url:%s date:%s error:%s', req.url, new Date(), err);
        res.status(err.status || 500);
        res.json({"error": 500, "errorMsg": err});
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    console.log('fatal error url:%s date:%s error:%s', req.url, new Date(), err);
    res.status(err.status || 500);
    res.json({"error": 500, "errorMsg": err});
});


module.exports = app;
