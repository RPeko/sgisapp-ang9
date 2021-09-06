//Install express server
var sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const path = require('path');

const app = express();
app.enable('trust proxy');

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/sgisapp'));
app.set('port', process.env.PORT || 5000);
app.get('/*', function(req,res) {  

res.sendFile(path.join(__dirname+'/dist/sgisapp/index.html'));
});
app.use(sslRedirect());
// Start the app by listening on the default Heroku port
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});