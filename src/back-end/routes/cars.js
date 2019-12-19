const verifyToken = require('../middleware/tokenVerify');
const admin = require('../middleware/admin');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const {Car, validate} = require('../models/car.js');

<<<<<<< HEAD
router.post('/', async (req, res) => {
=======
router.post('/', [verifyToken, admin], async (req, res) => {
>>>>>>> upstream/master

    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //sprawdzenie czy dane auto istnieje w bazie danych

    let car = await Car.findOne({model: req.body.model});

    // jeśli auto znajduje się w bazie danych to powiększa ich ilość


   //jeśli nie znajduje się w bazie danych to doda do bazy i przypisze ilość = 1
    car = new Car({
        brand: req.body.brand,
        model: req.body.model,
        motor: req.body.motor,
        track: req.body.track,
        power: req.body.power,
        height: req.body.height,
        width: req.body.width,
        length: req.body.length,
        amountOfCars: 1
    });

    await car.save();
    res.send(car);
});
module.exports = router; 
