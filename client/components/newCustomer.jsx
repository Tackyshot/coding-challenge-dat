import React, {Component} from 'react';
import CustomersActions from 'actions/customers.actions';

export default class NewCustomer extends Component {
  constructor(props) {
    super(props);
    this.state ={
      customer: {
        firstName: '',
        lastName: '',
        streetAddress: '',
        streetAddress2: '',
        city: '',
        state: '',
        zip: ''
      }
    }//nState

    this.handleChange = this.handleChange.bind(this);
  }

  render(){
    let customer = this.state.customer;

    return (
      <div style={{display: 'flex', flexDirection: 'column', margin: '10px'}}>
        <h3>New Customer Information:</h3>
        <label>
          First Name:
          <input type='text' name='firstName' defaultValue={customer.firstName} onChange={this.handleChange} />
        </label>
        <label>
          Last Name:
          <input type='text' name='lastName' defaultValue={customer.lastName} onChange={this.handleChange} />
        </label>
        <label>
          Street Address:
          <input type='text' name='streetAddress' defaultValue={customer.streetAddress} onChange={this.handleChange} />
        </label>
        <label>
          Street Address 2:
          <input type='text' name='streetAddress2' defaultValue={customer.streetAddress2} onChange={this.handleChange} />
        </label>
        <label>
          City:
          <input type='text' name='city' defaultValue={customer.city} onChange={this.handleChange} />
        </label>
        <label>
          State:
          <input type='text' name='state' defaultValue={customer.state} onChange={this.handleChange} />
        </label>
        <label>
          Zip-Code:
          <input type='text' name='zip' defaultValue={customer.zip} onChange={this.handleChange} />
        </label>
        <button
          onClick={()=> CustomersActions.insert(this.state.customer)}
          style={{ width: '150px', padding: '10px', margin: '10px', color: 'white', backgroundColor: '#306ca0', cursor: 'pointer'}}
        >Add Customer</button>
      </div>
    )
  }

  handleChange(e){
    let nState = {...this.state};

    nState.customer[e.target.name] = e.target.value;
    this.setState(nState);
  }//handleChange
}
