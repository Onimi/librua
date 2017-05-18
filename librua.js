var express = require('express');

var app = express();
app.set('port', process.env.PORT || 3000);


// routes
app.get('/', function (req, res) {
  // primitive funtionality
  res.type('text/plain');
  res.send('Welcome to Librua');
  //res.render('home');
});


// <------------- ERROR PAGES setting --------------------------------------------
// page 404
app.use(function (req, res) {
  // primitive funtionality
  res.type('text/plain');
  res.send('404 — Не найдено');
  /*res.status(404);
  res.render('404');*/
});

// page 500
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});
// ----------------------------------------------------------------------------->


// run application
app.listen(app.get('port'), function () {
  console.log('Express runs ' + app.get('env') + ' mode on http://localhost:' +
  app.get('port') + '; press Ctrl+C to stop.');
});
