const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('holi');
  next();
});

app.use((req, res, next) => {
  req.setEncoding('holo');
});

module.exports = app;
