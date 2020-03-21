import React, { Component } from 'react';
import './App.css';
import Movies from './component/movies';
import NavBar from './component/navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Customers from './component/customers';
import Renters from './component/renters';
import NotFound from './component/notFound';
import MovieDetails from './component/movieDetails';


class App extends Component {
  state = {  }
    render() { 
      return ( 
        <React.Fragment>
          <NavBar />
          <main className="container">
            <Switch>
              <Route path="/movies/:id" component={MovieDetails} />
              <Route path="/movies" component={Movies} />
              <Route path="/customers" component={Customers} />
              <Route path="/renters" component={Renters} />
              <Redirect from="/" exact to="/movies" />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
          </main> 
      </React.Fragment>
    );
  }
}
 
export default App;