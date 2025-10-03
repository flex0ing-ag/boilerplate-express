let express = require('express');
let app = express();

const path = require('path'); 

// Route to serve index.html
app.get('/', function(req, res) {
  const absolutePath = path.join(__dirname, 'views', 'index.html');
  res.sendFile(absolutePath);
});

module.exports = app;



































 module.exports = app;
