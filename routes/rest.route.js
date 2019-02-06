const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api.controller');

router.get('/', apiController.getOne);
router.get('/two', apiController.getTwo);
router.get('/three', apiController.getThree);

router.post('/post', apiController.postOne);
router.delete('/delete', apiController.deleteOne);
router.put('/put', apiController.putOne);



module.exports = router;