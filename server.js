let express = require('express');
let path = require('path');

let app = express();

let PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  Data
let reservation = [];
let waitList = [];
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

app.get('/api/tables',function(req,res){
  return res.json(reservation, waitlist)
});

app.post("/api/reservations", function(req, res) {
  let newReservation = req.body;
  if(reservation.length >= 5){
    app.post("/api/waitingList", function(req, res){

      waitList.push(newReservation);
      res.json(newReservation);
    })
    
  }
  else{
    reservation.push(newReservation);
    res.json(newReservation);
  }
  
 
});


// APP Listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});