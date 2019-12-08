//Importy modulow
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Joi = require('joi');


//Importy z innych plików

const cars = require('./routes/cars.js');

//Hello World na ścieżce / zapytania dla GET

app.get('/', (req, res) => {
    res.send('Hello World!')
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Nasluchuje portu ${port}...`);
})

// Połączenie z bazą danych ONLINE

// mongoose.connect('mongodb+srv://dostepdobazy:chomikiwitka@chomikiwitka-a2ubx.gcp.mongodb.net/test?retryWrites=true&w=majority')
//   .then(() => console.log('Connected to MongoDB...'))
//   .catch(err => console.error('Could not connect to MongoDB...'));


// Połączenie z lokalną bazą danych

mongoose.connect('mongodb://localhost/test')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

//uzycie funkcji

app.use(express.json());
app.use('/api/cars', cars);

