// equivalent of older: const express = require('express')
import express from 'express';
const app = express();

// Allow any method from any host and log requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
  if('OPTIONS' === req.method) {
    res.sendStatus(200);
  } else {
    console.log(`${req.ip} ${req.method} ${req.url}`);
    next();
  }
});
// Handle POST requests that come in formatted as JSON
// @ts-ignore
app.use(express.json())
// A default hello word route
// @ts-ignore
app.get('/', (req, res) => {
  res.send({hello: 'world'});
});
// start our server on port 4201
app.listen(4201, '127.0.0.1', function() {
  console.log("Server now listening on 4201");
});


var pdftohtml = require('pdftohtmljs');

//TODO Enable this to convert
var converter = new pdftohtml('fireball_531dx_manual.pdf');

// See presets (ipad, default)
// Feel free to create custom presets
// see https://github.com/fagbokforlaget/pdftohtmljs/blob/master/lib/presets/ipad.js
// convert() returns promise
converter.convert('ipad').then(function() {
  console.log("Success");
}).catch(function(err) {
  console.error("Conversion error: " + err);
});

// If you would like to tap into progress then create
// progress handler
converter.progress(function(ret) {
  console.log ((ret.current*100.0)/ret.total + " %");
});



// call method
