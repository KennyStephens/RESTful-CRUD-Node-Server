const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const overwatchRouter = require('./routes/overwatch.route');

const app = express();

app.use(bodyParser.urlencoded({
  extended: false,
  useNewUrlParser: true
}));

app.use(bodyParser.json());

app.use('/', overwatchRouter);

mongoose.connect('mongodb+srv://kenkneesteefens:Nodecourse@cluster0-drydi.mongodb.net/overwatch', {
  useNewUrlParser: true
}, () => {
  app.listen(5000, () => {
    console.log('Server is Running');
  });
});