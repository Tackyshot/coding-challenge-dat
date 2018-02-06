import Alt from '../alt';
import CustomerActions from '../actions/customer.actions';

class CustomerStore {
  constructor(){
    this.bindActions(CustomerActions);

    this.state = {};
  }//constructor

  onLoad(customer){
    this.setState(customer);
  }//onLoad

  onUpdate(customer){
    this.setState(customer);
  }//onUpdate

  onDelete(){
    this.setState({});
  }//onDelete

  onUpdateFieldValue(kvPair){
    let nState = {...this.state};

    nState.customer[kvPair.key] = kvPair.value;
    this.setState(nState);
  }
}

export default Alt.createStore(CustomerStore);
