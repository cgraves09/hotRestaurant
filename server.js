let express = require('express');
let path = require('path');

let app = express();

let PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  Data
let newTable {
    
}


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});