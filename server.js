const http = require('http');
const port = 1337;
const host = 'localhost';

const server = http.createServer(function (req, res){
    const url = red.url;
    if(url === '/text'){
        res.end("Bien connecté");
    }
});



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


app.listen(port, host, function() {
  console.log("Server up and running, go localhost:3000");
})

