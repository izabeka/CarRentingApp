//Hello World na ścieżce / zapytania dla GET
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Nasluchuje portu ${port}...`);
})

// Połączenie z bazą danych

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://kay:myRealPassword@cluster0.mongodb.net/test?w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
 // perform actions on the collection object
  client.close();
});