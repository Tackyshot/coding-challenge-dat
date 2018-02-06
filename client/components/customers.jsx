import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NewCustomer from './newCustomer';
import CustomersActions from 'actions/customers.actions';
import CustomersStore from 'stores/customers.store';

export default class Customers extends Component{
  constructor(props){
    super(props);

    this.state = {
      customers: [],
    }

    //rebindings
    this.handleCustomersChange = this.handleCustomersChange.bind(this);
  }

  componentWillMount(){
    CustomersStore.listen(this.handleCustomersChange);
    CustomersActions.load();
  }//componentWillMount

  render(){
    return (
      <div style={{margin: '10px'}}>
        <h2>DAT Customer List</h2>
        <hr />
        <NewCustomer {...this.props} />
        <hr />

        <h3>List of Customers</h3>
        <ul style={{listStyleType: 'none', padding: '0px'}}>
          {this.state.customers.map((customer, i) => {
            return <li key={`customer-${i}`}>{customer.customer.firstName} {customer.customer.lastName} <Link to={`/customer/${customer.id}`}>View / Edit Customer</Link></li>
          })}
        </ul>
      </div>
    )
  }//render

  componentWillUnmount(){
    CustomersStore.unlisten(this.handleCustomersChange);
  }//componentWillUnmount

  handleCustomersChange(customersStore){
    console.log('CHANGE:', customersStore);
    this.setState({
      customers: customersStore.customers
    });
  }//handleCustomersChange
}
