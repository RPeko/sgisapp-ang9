//Install express server
const express = require('express');
const path = require('path');

const app = express();
app.enable('trust proxy');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/sgfe'));
app.set('port', process.env.PORT || 5000);
app.get('/*', function(req,res) {  
res.sendFile(path.join(__dirname+'/dist/sgfe/index.html'));
});
app.use(function (req, res, next) {
  if (req.secure) {
    next();
  } else {
    res.redirect('https://' + req.headers.host + req.url);
  }
});

// Start the app by listening on the default Heroku port
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});