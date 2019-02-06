const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api.controller');

router.get('/', apiController.getOne);
router.get('/two/:id', apiController.getTwo);
router.get('/three/:class', apiController.getThree);

router.post('/post', apiController.postOne);
router.delete('/delete/:id', apiController.deleteOne);
router.put('/put/:id', apiController.putOne);



module.exports = router;