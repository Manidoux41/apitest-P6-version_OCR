const express = require('express');

const router = express.Router();

const saucesCtrl = require('../controllers/sauce');

router.post('/', saucesCtrl.createSauce);
  
router.get('/:id', saucesCtrl.getSauceById);
  
router.put('/:id', saucesCtrl.updateSauceById);
  
router.delete('/:id', saucesCtrl.deleteOneSauce);
  
router.get('/' +'', saucesCtrl.getAllSauces);

module.exports = router;