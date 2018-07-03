
var MongoClient = require('mongodb').MongoClient;
var express = require('express');

var app = express();

var url = 'mongodb://localhost:27017/';
var port = process.env.PORT || 7998;
var timeIntervalBetweenRecords = 1;
var timer = 2;
var dbd = null;

function generateRecords() {

  var dbo = dbd.db('streamdb');
  var myobj = { time: timer, temperature: Math.floor(Math.random() * (32 - 22 + 1)) + 22 };


  dbo.collection('mongoRecGenie').insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log(timer + 'document inserted');
    //dbd.close();
  });

  timer++;
  setTimeout(generateRecords, timeIntervalBetweenRecords * 1000);
}



MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  dbd = db;
  generateRecords();

  app.listen(port);
  console.log('Server Started on port ' + port);
});
