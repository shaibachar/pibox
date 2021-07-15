'use strict';
const express = require('express');

const Gpio = require('onoff').Gpio;
const relay1 = new Gpio(12, 'high'); // IMPORTANT: Use 'high' if relay uses low level trigger
const relay2 = new Gpio(16, 'high');
const relay3 = new Gpio(20, 'high');
const relay4 = new Gpio(21, 'high');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    relay1.writeSync(0);
    relay2.writeSync(0);
    relay3.writeSync(0);
    relay4.writeSync(0);
    console.log('Relay should be on. Relay will turn off in 5 seconds.');

    setTimeout(() => {
      relay1.writeSync(1);
      relay2.writeSync(1);
      relay3.writeSync(1);
      relay4.writeSync(1);
      console.log('Relay should be off. ');
    }, 5000);
  }, 5000);

  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
