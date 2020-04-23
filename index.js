'use strict';

// DONE: What is this line doing?
//This line will allow us to use all the
// files in the environmental variables.
require('dotenv').config();

// DONE: What is this line doing?
//This line is importing our server and starting our
// server by using the stored environmental variables in the port.
require('./lib/server.js').start(process.env.PORT);
