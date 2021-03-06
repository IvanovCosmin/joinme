var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient

var routes = require('./routes/index');
var users = require('./routes/users');
var enter = require('./routes/enter');
var addact = require('./routes/addact');
var activities = require('./routes/activities');

var app = express();

var jsonParser = bodyParser.json()
 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var db;

MongoClient.connect('mongodb://a:a@ds035036.mlab.com:35036/scoala', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/enter', enter);
app.use('/addact',addact);
app.use('/activities',activities);

app.post('/add', (req, res) => {
  db.collection('entries').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    console.log(req.body);
  })
/*  for (var i in req.body.Table) {
    db.collection('activities').update( {"nume":i} , 
                                        { $inc: { "nr" : -1 } } );
    console.log(i);
} */
  console.log (req.body['0'] );
  res.redirect('/');
})

app.post('/addacti', (req, res) => {
  db.collection('activities').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log(req.body);
    console.log('saved to database');
    res.redirect('/activities');
  })
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
