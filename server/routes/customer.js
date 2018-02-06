const http = require('../http');
const path = require('path');
const Customers = require('../controllers/customerStub');

http.get('/api/v1/customer', (req, res) => {
  res.json(Customers.list());
});

http.post('/api/v1/customer', (req, res) => {
  let newCustomer = req.body;
  res.json(Customers.insert(newCustomer));
});

http.get('/api/v1/customer/:id', (req, res) => {
  res.json(Customers.getCustomer(req.params.id));
});

http.put('/api/v1/customer/:id', (req, res) => {
  let customer = req.body;

  res.json(Customers.update(req.params.id, customer));
});

http.delete('/api/v1/customer/:id', (req, res) => {
  let isDeleted = Customers.delete(req.params.id);

  res.json({msg: isDeleted ? 'Customer successfully deleted' : 'There was an error, the customer remains'});
});

module.exports = http;
