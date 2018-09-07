const express = requir("express");
const app = express();
const exphbs = requir('express-handlebars');
const bodyParser = requir('body-parser');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//parse app/x-www-form-uelencoded
app.use(bodyParser.urlencoded({ extended: false}));

//parse application/json
app.use(bodyParser.json());

app.use(express.statics('public'));

app.get('/', function (req, res)) {
  res.render('home');
});

let PORT = process.env.PORT || 3007;

app.listen(PORT, function()){
  console.log('App starting on port', PORT);
});
