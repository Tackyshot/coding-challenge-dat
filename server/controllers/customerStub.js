const Customer = require('../models/customer');
const uuid = require('uuid/v1');

class Customers {
  constructor(){
    this.customers = new Array();

    //because this is example app, create one customer at start up.
    this.customers.push({id: uuid(), customer: new Customer("Bob", "Smith", "124 Main St", "", "Portland", "OR", "97753")})
  }

  list(){
    return this.customers;
  }//list

  getCustomer(id){
    return this.customers.find((customer) => {
      return customer.id === id
    });
  }//getCustomer

  update(id, customer){
    let _customer = this.customers.find((customer) => {
      return customer.id === id;
    });

    _customer.customer.setFirstName(customer.firstName);
    _customer.customer.setLastName(customer.lastName);
    _customer.customer.setStreetAddress(customer.streetAddress);
    _customer.customer.setStreetAddress2(customer.streetAddress2);
    _customer.customer.setCity(customer.city);
    _customer.customer.setState(customer.state);
    _customer.customer.setZip(customer.zip);

    return this.customers.splice(this.customers.findIndex((customer) => {
      return customer.id === id;
    }), 1, _customer);
  }//update

  insert(customer){
    let nCustomer = {id: uuid(), customer: new Customer(customer.firstName, customer.lastName, customer.streetAddress, customer.streetAddress2, customer.city, customer.state, customer.zip)};

    this.customers.push(nCustomer);
    return nCustomer;
  }//insert

  delete(id){
    return this.customers.splice(this.customers.findIndex((customer) => {
      return customer.id === id;
    }), 1);
  }//delete
}

module.exports = new Customers();
