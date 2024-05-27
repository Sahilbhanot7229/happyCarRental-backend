const Car = require('../models/car');

const getCars = async (req, res) => {
    try {
        let cars = await Car.find();
        if (cars.length === 0) {
            cars = [{
                _id: '1',
                make: 'Tesla',
                model: 'Model S',
                year: 2021,
                availability: true
            }];
        }
        res.json(cars);
        
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getCars };
