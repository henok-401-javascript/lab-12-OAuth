'use strict';

// External Resources
const express = require('express');
const cors = require('cors');

// Internal Resources
const oauth = require('./oauth.js');
const swaggerDocument = require('../docs/swagger.js');

// DONE: What is this line doing?
//This line is naming our express or web application framework in to app .
const app = express();
swaggerDocument(app);

// DONE: What is this line doing?
//This line is setting up to use
// cors configuration .
app.use(cors());

// This line of code allows us to use the HTML pages located in the public folder.
// It is important for OAuth applications to have some "front-end" webpages, because
// we want to have the user redirect to a webpage owned by our OAuth provider.
app.use(express.static('./public'));

// DONE: What is this route doing?
//This route is using a middleware name of oauth.
//And sends a token.
// DONE: Document route with swagger comments
/**
 * This page will give the created Token.
 * @route GET /oauth
 * @returns {object} 200 - return the Token.
 * @returns {error} - if they are not authorized user.
 */
app.get('/oauth', oauth, (req, res) => {
  res.status(200).send(req.token);
});

// DONE: What is this module exporting?
//This line exports both server and stored environment variables in port.
// DONE: What does app.listen do?
//the server is listening to the specific port.
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};
