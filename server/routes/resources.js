const express = require('express');
const http = require('../http');
const path = require('path');

http.use('/resources', express.static(path.resolve(`${__dirname}/../resources`)));

module.exports = http;
