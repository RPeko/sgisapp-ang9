//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/sgisapp'));
app.set('port', process.env.PORT || 5000);
app.get('/*', function(req,res) {  

res.sendFile(path.join(__dirname+'/dist/sgisapp/index.html'));
});
app.enable('trust proxy');
app.use(function (req, res, next) {
  if (req.header('x-forwarded-proto') === 'http') {
    res.redirect(301, 'https://' + req.hostname + req.url);
    return
  }
  next()
});
// Start the app by listening on the default Heroku port
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});