# Mongo Data Generator - Temperature

Temperature data generator for mongo DB


## Purpose

- Provides a real time random data stream mimics temperature data.
- provides random data within 2 limits
- record interval can be adjusted

## Customizations

    var timeIntervalBetweenRecords = 1; //record interval

    var myobj = { time: timer, temperature: Math.floor(Math.random() * (32 - 22 + 1)) + 22 };
    /* Here;
    32 is the upper limit
    22 is the lower limit
    Just replace the values
    */

## Running the App

- make sure your environment has the Node.js installed
- up the mongodb and ensure you have a instance running on the mongo address provided. ('mongodb://localhost:27017/')
- navigate to the directory from the terminal and type 'node server'

## possible Errors

- due to not having a running mongo instance.
- can be due to version upgradtion of mongo db (tested on MongoDB shell version: 3.2.10)

- if you are running mongo replica set; Probable error records

    MongoError: not master
    at Function.MongoError.create (/Users/Omal/mongoRecordGenieTemperature/node_modules/mongodb/node_modules/mongodb-core/lib/error.js:31:11)
    at /Users/Omal/mongoRecordGenieTemperature/node_modules/mongodb/node_modules/mongodb-core/lib/connection/pool.js:497:72
    at authenticateStragglers (/Users/Omal/mongoRecordGenieTemperature/node_modules/mongodb/node_modules/mongodb-core/lib/connection/pool.js:443:16)
    at Connection.messageHandler (/Users/Omal/mongoRecordGenieTemperature/node_modules/mongodb/node_modules/mongodb-core/lib/connection/pool.js:477:5)
    at Socket.<anonymous> (/Users/Omal/Desktop/digitalOcean Testing/mongo record generator/mongoRecordGenieTemperature/node_modules/mongodb/node_modules/mongodb-core/lib/connection/connection.js:331:22)
    at emitOne (events.js:116:13)
    at Socket.emit (events.js:211:7)
    at addChunk (_stream_readable.js:263:12)
    at readableAddChunk (_stream_readable.js:250:11)
    at Socket.Readable.push (_stream_readable.js:208:10)

- Solution : check which is the primary & set the address of primary db to the variable 'url' in the app.

Author : Omal Perera (https://omalperera.github.io/)