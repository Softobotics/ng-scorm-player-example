//Install express server
const express = require('express');
const path = require('path');

const app = express();
// Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/scrom-example'));

// app.get('/*', function (req, res) {
//     console.log("working");
//     res.header("Access-Control-Allow-Origin", '*');
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
//     res.sendFile(path.join(__dirname + '/dist/scrom-example/index.html'));
// });

app.configure(function(){
    app.use(function(req, res, next) {
      var matchUrl = '/dist/scrom-example';
      if(req.url.substring(0, matchUrl.length) === matchUrl) {
        res.header("Access-Control-Allow-Origin", '*');
        res.header("Access-Control-Allow-Credentials", true);
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
      }
      return next();
    });
    // app.use(express.static(path.join(__dirname, "StaticPages")));
    app.use(express.static(__dirname + '/dist/scrom-example'));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);