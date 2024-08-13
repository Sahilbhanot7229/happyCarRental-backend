const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

router.post('/add-car', carController.addCar);
router.get('/', carController.getCars);
router.get('/:id', carController.getCarById);

router.put('/update-car/:id', carController.updateCar);
router.delete('/delete-car/:id', carController.deleteCar);

module.exports = router;
