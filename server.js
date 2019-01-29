var express = require('express');

var app = express();

var PORT = process.env.PORT || 8240;
 


var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//this is where the problem seems to be and i dont understand it every time I look into
//this on stackoverflow/ query searching for how exports work says that this is right

var router = require('./controllers/burgers_controller.js');
app.use('/', router);

app.listen(PORT, function() {
  console.log("Listening at ", PORT);
});

