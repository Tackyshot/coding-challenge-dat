import React, {Component} from 'react';
import CustomerActions from 'actions/customer.actions';
import CustomerStore from 'stores/customer.store';

export default class Customer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      customer: {
        firstName: '',
        lastName: '',
        streetAddress: '',
        streetAddress2: '',
        city: '',
        state: '',
        zip: ''
      }
    }

    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleDeleteAction = this.handleDeleteAction.bind(this);
  }

  componentWillMount(){
    CustomerStore.listen(this.handleStoreChange);
    CustomerActions.load(this.props.match.params.customerId);
    console.log(this.props);
  }//componentWillMount

  render(){
    let customer = this.state.customer;

    return (
      <div style={{display: 'flex', flexDirection: 'column', margin: '10px'}}>
        <h3>View / Edit Customer Information:</h3>
        <label>
          First Name:
          <input
            type='text'
            name='firstName'
            value={customer.firstName}
            onChange={(e)=> CustomerActions.updateFieldValue(e.target.name, e.target.value)} />
        </label>
        <label>
          Last Name:
          <input
            type='text'
            name='lastName'
            value={customer.lastName}
            onChange={(e)=> CustomerActions.updateFieldValue(e.target.name, e.target.value)} />
        </label>
        <label>
          Street Address:
          <input
            type='text'
            name='streetAddress'
            value={customer.streetAddress}
            onChange={(e)=> CustomerActions.updateFieldValue(e.target.name, e.target.value)} />
        </label>
        <label>
          Street Address 2:
          <input
            type='text'
            name='streetAddress2'
            value={customer.streetAddress2}
            onChange={(e)=> CustomerActions.updateFieldValue(e.target.name, e.target.value)} />
        </label>
        <label>
          City:
          <input
            type='text'
            name='city'
            value={customer.city}
            onChange={(e)=> CustomerActions.updateFieldValue(e.target.name, e.target.value)} />
        </label>
        <label>
          State:
          <input
            type='text'
            name='state'
            value={customer.state}
            onChange={(e)=> CustomerActions.updateFieldValue(e.target.name, e.target.value)} />
        </label>
        <label>
          Zip-Code:
          <input
            type='text'
            name='zip'
            value={customer.zip}
            onChange={(e)=> CustomerActions.updateFieldValue(e.target.name, e.target.value)} />
        </label>
        <button
          onClick={()=> CustomerActions.update(this.state.id, this.state.customer)}
          style={{ width: '150px', padding: '10px', margin: '10px', color: 'white', backgroundColor: '#306ca0', cursor: 'pointer'}}
        >Update Customer</button>
        <span> -- OR -- </span>
        <button
          onClick={this.handleDeleteAction}
          style={{ width: '150px', padding: '10px', margin: '10px', color: 'white', backgroundColor: 'red', cursor: 'pointer'}}
        >Delete Customer</button>
      </div>
    )
  }//render

  componentWillUnmount(){
    CustomerStore.unlisten(this.handleStoreChange);
  }//componentWillUnmount

  handleStoreChange(customerStore){
    this.setState(customerStore);
  }//handleFieldChange

  handleDeleteAction(){
    CustomerActions.delete(this.state.id);
    this.props.history.goBack();
  }
}
