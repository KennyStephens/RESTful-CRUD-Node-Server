const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api.controller');

router.get('/', apiController.getAllCharacters);
router.get('/:name', apiController.getOneCharacter);
router.get('/:class', apiController.getByClass);


router.post('/post', apiController.postOne);
router.delete('/delete/:id', apiController.deleteOne);
router.put('/put/:id', apiController.putOne);



module.exports = router;