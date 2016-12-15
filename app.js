var express = require('express');
var bodyParser =  require('body-parser');

var app = express();
app.set('port',  process.env.PORT || 3000);

app.use(bodyParser.urlencoded({extended: true}));

app.post('/', function (req, res) {

});


app.listen(app.get('port'), function () {
  console.log(' Background bot is Listening on port ' + app.get (port ));
  
});



});
