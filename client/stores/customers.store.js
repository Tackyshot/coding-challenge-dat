import Alt from '../alt';
import CustomersActions from '../actions/customers.actions';

class CustomersStore {
  constructor(){
    this.bindActions(CustomersActions);

    this.state = {
      customers: new Array()
    }
  }//constructor

  onLoad(customers){
    this.setState({customers: customers});
  }//onLoad

  onInsert(customer){
    let nState = {...this.state};

    nState.customers.push(customer);
    this.setState(nState);
  }
}

export default Alt.createStore(CustomersStore);
