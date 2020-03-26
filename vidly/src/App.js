import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
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
import auth from './services/authService'
import './App.css';





class App extends Component {
  state = {}

  componentDidMount(){
    const user = auth.getCurrentUser();
    this.setState({user});
  }

    render() { 
      const {user} = this.state;
      return ( 
        <React.Fragment>
          <NavBar user={user} />
          <ToastContainer />
          <main className="container">
            <Switch>
              <Route path="/login" component={LoginFrom} />
              <Route path="/logout" component={Logout} />
              <Route path="/register" component={RegisterForm} />
              <Route path="/profile" component={Profile}/>
              <Route path="/movies/:id" render={ props => {
                if(!user) return <Redirect to="/login" />;
                return <MovieFrom {...props} />;
              }}  />
              <Route path="/movies" render={ props => <Movies {...props} user={user} />} />
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