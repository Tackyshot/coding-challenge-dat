import Alt from '../alt';
import request from 'superagent';

class CustomersActions {
  load(id){
    return (dispatch) => {
      request
        .get(`/api/v1/customer`)
        .type('application/json')
        .accept('application/json')
        .end((err, res) => {
          if(!!err) return console.error(err);
          console.log('REzzPONSE:', JSON.parse(res.text));
          dispatch(JSON.parse(res.text));
        });
    }
  }//load

  insert(customer){
    return (dispatch) => {
      request
        .post(`/api/v1/customer`)
        .type('application/json')
        .accept('application/json')
        .send(customer)
        .end((err, res) => {
          if(!!err) return console.error(err);

          dispatch(JSON.parse(res.text));
        });
    }
  }//insert
}

export default Alt.createActions(CustomersActions);
