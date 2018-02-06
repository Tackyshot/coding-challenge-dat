'use strict';
const fs = require('fs');
const http = require('./http');
const path = require('path');

class Application {
  constructor(){
    let routes = fs.readdirSync(`${__dirname}/routes`);

    routes.forEach((route, i) => {
      require(`${__dirname}/routes/${route}`)
    });

    //add catch all for non root browser refreshes.
    http.get('*', (req, res) => {
      res.sendFile(path.resolve(`${__dirname}/resources/html/index.html`));
    });
  }

  start(){
    http.listen('3000', () => {
      console.log('Running on port 3000');
    });
  }
}

module.exports = new Application().start();
