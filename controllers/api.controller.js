const OwCharacter = require('../models/ow.character');

exports.getAllCharacters = (req, res, next) => {
  OwCharacter.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err));
  // res.send('getOne');
  // const zenyatta = new OwCharacter({
  //   name: 'Zenyatta',
  //   ultimate: 'Transcendance',
  //   class: 'Support',
  //   weapon: 'Orbs'
  // });
  // zenyatta.save()
  //   .then(result => {
  //     console.log('Character Added')
  //   })
  //   .catch(err => console.log(err));
};

exports.getOneCharacter = (req, res, next) => {
  const characterName = req.params.name;
  OwCharacter.find({
    name: characterName
  })
    .then(result => {
      res.send(result);
    })
    .catch(err => console.log(err));
};

exports.getByClass = (req, res, next) => {
  const characterClass = req.params.class;
  OwCharacter.find({
      class: characterClass
    })
    .then(result => {
      res.send(result)
    })
};

exports.postOneCharacter = (req, res, next) => {
  console.log(req.body)
  const name = req.body.name;
  const weapon = req.body.weapon;
  const ultimate = req.body.ultimate;
  const className = req.body.class;

  const character = new OwCharacter({
    name: name,
    ultimate: ultimate,
    class: className,
    weapon: weapon
  });
  character.save()
    .then(result => {
      res.status(201)
        .send(result);
    })
    .catch(err => console.log(err));
};

exports.deleteOneCharacter = (req, res, next) => {
  const characterId = req.params.id;
  OwCharacter.findByIdAndDelete(characterId)
    .then(result => {
      res.status(200).send({
        message: 'Character Deleted'
      })
    })
    .catch(err => console.log(err));
};

exports.putOneCharacter = (req, res, next) => {
  const characterId = req.params.id;
  const name = req.body.name;
  const weapon = req.body.weapon;
  const ultimate = req.body.ultimate;
  const className = req.body.class;
  OwCharacter.findByIdAndUpdate(characterId, {
      name: name,
      weapon: weapon,
      ultimate: ultimate,
      className: className
    })
    .then(result => {
      res.status(200)
        .send('Updated')
    })
    .catch(err => console.log(err));
};