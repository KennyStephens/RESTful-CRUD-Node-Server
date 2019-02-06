const OwCharacter = require('../models/ow.character');

exports.getOne = (req, res, next) => {
  res.send('getOne');
  const zenyatta = new OwCharacter({
    name: 'Zenyatta',
    ultimate: 'Transcendance',
    class: 'Support',
    weapon: 'Orbs'
  });
  zenyatta.save()
    .then(result => {
      console.log('Character Added')
    })
    .catch(err => console.log(err));
};

exports.getTwo = (req, res, next) => {
  res.send('getTwo');
};

exports.getThree = (req, res, next) => {
  res.send('getThree');
};

exports.postOne = (req, res, next) => {
  res.send('postOne');
};

exports.deleteOne = (req, res, next) => {
  res.send('deleteOne');
};

exports.putOne = (req, res, next) => {
  res.send('putOne');
};