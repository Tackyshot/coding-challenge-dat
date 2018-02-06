const http = require('../http');
const path = require('path');

http.get('/', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../resources/html/index.html`));
});

module.exports = http;
