let express = require('express');
let path = require('path');

let app = express();

let PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  Data

// Routes
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, 'home.html'))
});

app.get('/tables', function(req,res){
  res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/reserve', function(req,res){
  res.sendFile(path.join(__dirname, 'reserve.html'));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});