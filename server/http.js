'use strict';
const express = require('express');
const http = express();
const bodyParser = require('body-parser');
// const multer = require('multer');
// const upload = multer();

http.use(bodyParser.json());
http.use(bodyParser.urlencoded({ extended: true }));

module.exports = http;
