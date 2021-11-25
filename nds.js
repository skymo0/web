
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');


app.set('view engine', 'handlebars')
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
}))
app.get('/', function (req, res) {
  res.render('main', {layout :'index'});
})

app.use(express.static('public'))


app.listen(3000, function() {
  console.log("Server up and running, go localhost:3000");
})



