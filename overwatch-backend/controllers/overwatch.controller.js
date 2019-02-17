const OwCharacter = require('../models/overwatchCharacter');

exports.getAllCharacters = async (req, res, next) => {
  try {
    const allCharacters = await OwCharacter.find()
    console.log(allCharacters)
    res.send(allCharacters);
  } catch (error) {
    console.log(error);
  }
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
  console.log('Post Character');
  // console.log(req.body)
  const name = req.body.name;
  const weapon = req.body.weapon;
  const ultimate = req.body.ultimate;
  const className = req.body.class;
  const imageUrl = req.body.imageUrl

  const character = new OwCharacter({
    name: name,
    ultimate: ultimate,
    class: className,
    weapon: weapon,
    imageUrl: imageUrl
  });
  character.save()
    .then(result => {
      res.status(201)
        .redirect('http://localhost:8080/')
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
  const imageUrl = req.body.imageUrl
  OwCharacter.findByIdAndUpdate(characterId, {
      name: name,
      weapon: weapon,
      ultimate: ultimate,
      className: className,
      imageUrl: imageUrl
    })
    .then(result => {
      res.status(200)
        .send('Updated')
    })
    .catch(err => console.log(err));
};