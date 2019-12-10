const express = require('express');
const router = express.Router();
const {User, validateUser} = require('../models/user')

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

module.exports = router;