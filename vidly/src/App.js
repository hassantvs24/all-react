import React, { Component } from 'react';
import './App.css';
import Movies from './component/movies';
import NavBar from './component/navbar';
import { Switch, Route } from 'react-router-dom';
import Customers from './component/customers';
import Renters from './component/renters';


class App extends Component {
  state = {  }
    render() { 
      return ( 
        <React.Fragment>
          <NavBar />
          <main className="container">
            <Switch>
              <Route path="/movies" component={Movies} />
              <Route path="/customers" component={Customers} />
              <Route path="/renters" component={Renters} />
            </Switch>
          </main> 
      </React.Fragment>
    );
  }
}
 
export default App;