//Importy
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Joi = require('joi')

//Importy z innych plików
const users = require('./routes/users');

//Hello World na ścieżce / zapytania dla GET

app.get('/', (req, res) => {
    res.send('Hello World!')
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Nasluchuje portu ${port}...`);
})

// Połączenie z bazą danych ONLINE

mongoose.connect('mongodb+srv://dostepdobazy:chomikiwitka@chomikiwitka-a2ubx.gcp.mongodb.net/test?retryWrites=true&w=majority')
   .then(() => console.log('Connected to MongoDB...'))
   .catch(err => console.log('Could not connect to MongoDB...' + err));

app.use(express.json())

//Obsługa requestów
app.use('/api/user', users);

