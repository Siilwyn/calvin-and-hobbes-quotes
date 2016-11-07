'use strict';

const quotes = require('./quotes.json');

exports.all = quotes;
exports.random = () => quotes[Math.floor(Math.random() * quotes.length)];
