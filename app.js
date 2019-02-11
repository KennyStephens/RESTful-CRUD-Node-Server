const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const APIrouter = require('./routes/rest.route');

const app = express();

app.use(bodyParser.urlencoded({
  extended: false,
  useNewUrlParser: true
}));

app.use(bodyParser.json());

app.use('/', APIrouter);

mongoose.connect('mongodb+srv://kenkneesteefens:Nodecourse@cluster0-drydi.mongodb.net/overwatch', {
  useNewUrlParser: true
}, () => {
  app.listen(5000, () => {
    console.log('Server is Running');
  });
});