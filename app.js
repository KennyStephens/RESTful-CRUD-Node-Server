const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
	extended: false,
	useNewUrlParser: true
}));



app.listen(5000, () => {
  console.log('Server is Running');
});