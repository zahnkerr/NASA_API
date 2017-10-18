const express = require('express');
const app = express();

var port = 3000;

//setup a public folder

app.use(express.static('public'));

app.get('/', (res, req) => {
  res.send('index.html');
});

app.listen(port);
