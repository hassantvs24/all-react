import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import auth from '../services/authService';
import {toast} from 'react-toastify';
import { Redirect } from 'react-router-dom';

class LoginFrom extends Form {
     state = {
         data: {username: '', password: ''},
         errors: {}
     };

     schema = {
         username: Joi.string().email().required().label('Username'),
         password: Joi.string().required().label('Password')
     }


    doSubmit = async () => {
        try{
            const {data} = this.state;
            await auth.login(data.username, data.password);
            const {state} = this.props.location;
            window.location = (state ? state.from.pathname : '/'); //Redirect current url or homepage
          }catch(ex){
              if(ex.response && ex.response.status === 400){
                  const errors = {...this.state.errors};
                  errors.username = ex.response.data;
                  this.setState({errors});
              }
            //toast.error(`Something Error: ${ex}`);
          }
    }


    render() { 
        if(auth.getCurrentUser()) return <Redirect to="" />
        return ( 
            <div>
                <h1>Login</h1> 

                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username', 'email')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton('Login')}
                </form>

            </div>
        );
    }
}
 
export default LoginFrom;