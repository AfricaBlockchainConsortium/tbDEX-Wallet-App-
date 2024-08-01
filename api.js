const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'mydatabase';

app.post('/api/insert-document', (req, res) => {
  MongoClient.connect(url, function(err, client) {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'Error connecting to MongoDB' });
    } else {
      console.log('Connected to MongoDB');
      const db = client.db(dbName);
      const collection = db.collection('mycollection');
      collection.insertOne({ name: 'John Doe', age: 30 }, function(err, result) {
        if (err) {
          console.log(err);
          res.status(500).send({ message: 'Error inserting document' });
        } else {
          console.log('Document inserted');
          res.send({ message: 'Document inserted successfully' });
        }
      });
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
