import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import jwtDecode from 'jwt-decode';
import Movies from './component/movies';
import NavBar from './component/navbar';
import Customers from './component/customers';
import Renters from './component/renters';
import NotFound from './component/notFound';
import MovieFrom from './component/movieForm';
import LoginFrom from './component/loginForm';
import RegisterForm from './component/registerForm';
import Logout from './component/logout';
import Profile from './component/profile';
import './App.css';





class App extends Component {
  state = {}

  componentDidMount(){
    try{
      const jwt = localStorage.getItem('token');
      const user = jwtDecode(jwt);
      this.setState({user});
      //console.log(user);
    } catch (ex) {
     // console.log('no token found');
    }
    
  }

    render() { 
      return ( 
        <React.Fragment>
          <NavBar user={this.state.user} />
          <ToastContainer />
          <main className="container">
            <Switch>
              <Route path="/login" component={LoginFrom} />
              <Route path="/logout" component={Logout} />
              <Route path="/register" component={RegisterForm} />
              <Route path="/profile" component={Profile}/>
              <Route path="/movies/:id" component={MovieFrom} />
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