//Importy
const express = require('express');
const router = express.Router();
const {User, validateUser} = require('../models/user');
const bcrypt = require('bcryptjs');

//Rejestracja
router.post('/register', async (req, res) => {
    
    //Walidacja
    const { error } = validateUser(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    };
    
    //Sprawdzenie czy jest w bazie dany login lub mail
    let mailTaken = await User.findOne({email: req.body.email});
    let loginTaken = await User.findOne({login: req.body.login});

    if (mailTaken) {
        return res.status(400).send('User with that email already exists.');
    }
    
    if (loginTaken) {
        return res.status(400).send('User with that login already exists.');
    }

    //Hash'owanie hasła
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    //Tworzenie nowego użytkownika
    const newUser = new User({
        login: req.body.login,
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });

    //Zapisywanie w bazie
    try {
        await newUser.save()
        res.status(200).send({
                message: 'User created',
                login: newUser.login,
                email: newUser.email,
                _id: newUser._id
        })
    } catch (err) {
            res.status(400).send(err);
    }
});

// aktualizacja danych użytkownika, 
router.put('/:id', async (req, res) => {

    const {error} = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    }, {new: true})

    if (!user) return res.status(404).send ('User does not exist!');
    res.send(user);
});

router.delete('/:id', async (req, res) => {
    const user = await User.findByIdAndRemove(req.params.id)

    if(!user) return res.status(404).send('User does not exist!');
    res.send(user);

});

//Eksportowanie
module.exports = router;