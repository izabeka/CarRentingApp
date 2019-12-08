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

// Połączenie z bazą danych

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dostepdobazy:chomikiwitka@chomikiwitka-a2ubx.gcp.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

//uzycie funkcji

app.use(express.json());
app.use('./routes/cars', cars);

