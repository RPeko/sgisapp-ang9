//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/gisapp'));
app.set('port', process.env.PORT || 5000);

app.get('/*', function(req,res) {  

res.sendFile(path.join(__dirname+'/dist/gisapp/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});