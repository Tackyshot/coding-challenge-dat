import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from 'react-router-dom';
import Customers from './customers';
import Customer from './customer';

export default class Head extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Router>
        <div>
          <h1>DAT Customer Management Tool</h1>

          <Route path="/" exact render={(props) => {
            return <Customers {...props} />
          }} />

          <Route path="/customer/:customerId" exact render={(props) => {
            return <Customer {...props} />
          }} />
        </div>
      </Router>
    )
  }//render
}
