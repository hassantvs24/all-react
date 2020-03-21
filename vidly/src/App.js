import React, { Component } from 'react';
import Movies from './component/movies';
import NavBar from './component/navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Customers from './component/customers';
import Renters from './component/renters';
import NotFound from './component/notFound';
import MovieDetails from './component/movieDetails';
import './App.css';


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
              <Route path="/not-found" component={NotFound} />
              <Redirect from="/" exact to="/movies" />
              <Redirect to="/not-found" />
            </Switch>
          </main> 
      </React.Fragment>
    );
  }
}
 
export default App;