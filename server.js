let express = require('express');
let path = require('path');

let app = express();

let PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  Data
let reservation = [
  {
    name: 'Chris',
    phone: '561-866-7644',
    email: 'test@gmail.com',
    uniqueId: 1234564

  }
  ];
let waitList = [
  {
    name: 'Chris',
    phone: '561-866-7644',
    email: 'test@gmail.com',
    uniqueId: 1234564
  }
  ];
// Routes
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, 'home.html'))
});

app.get('/view', function(req,res){
  res.sendFile(path.join(__dirname, 'view.html'));
});

app.get('/make', function(req,res){
  res.sendFile(path.join(__dirname, 'make.html'));
});

app.get('/api/reservations',function(req,res){
  return res.json(reservation);
});

app.get('/api/waitingList',function(req,res){
  return res.json(waitList);
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