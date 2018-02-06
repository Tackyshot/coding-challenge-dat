import Alt from '../alt';
import request from 'superagent';

class CustomerActions {

  load(id){
    return (dispatch) => {
      request
        .get(`/api/v1/customer/${id}`)
        .type('application/json')
        .accept('application/json')
        .end((err, res) => {
          if(!!err) return console.error(err);

          dispatch(JSON.parse(res.text));
        });
    }
  }//load

  update(id, customer){
    return (dispatch) => {
      request
        .put(`/api/v1/customer/${id}`)
        .type('application/json')
        .accept('application/json')
        .send(customer)
        .end((err, res) => {
          if(!!err) return console.error(err);

          dispatch(JSON.parse(res.text));
        });
    }
  }//update

  delete(id){
    return (dispatch) => {
      request
        .del(`/api/v1/customer/${id}`)
        .type('application/json')
        .accept('application/json')
        .end((err, res) => {
          if(!!err) return console.error(err);

          dispatch(id);
        });
    }
  }//delete

  updateFieldValue(key, value){
    return (dispatch) => {
      dispatch({key: key, value: value});
    }
  }//updateFieldValue
}

export default Alt.createActions(CustomerActions);
