app.post('/',function(req , res ){
  var username=req.body.user_name;
  var botPayload={
  var message = req.body.text;

    if(userName  === '@hola ') {
      res.end();
      return
    }
  var reversedMessage = message.split('').reverse().join('');
  var reply = {
      text: reversedMessage

  };
  res.json(reply);
});
