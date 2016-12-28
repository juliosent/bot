var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
// Slack nos va a enviar los mensajes aqui
app.post('*', function (req, res) {
  // Paso 1: Recibir mensaje
  var username = req.body.user_name;
  console.log(req.body);
  var message = req.body.text;
  // Paso 1.5: verificar si el mensaje viene de slackbot
  if (username === 'slackbot') {
    res.end();
    return;
  }
  // Paso 2: Contestar (o no) el mensaje
  // Construir la contestacion
  var reversedMessage = message.split('').reverse().join('');
  var reply = {
    text: reversedMessage
  };
  res.json(reply);
});

app.listen(5000, "0.0.0.0", function(){
    console.log("CONNECTED");
});
