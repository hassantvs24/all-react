import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import {login}from '../services/authService';
import {toast} from 'react-toastify';

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
        const {data} = this.state;
        try{
            const {data: jwt} = await login(data.username, data.password);
            //console.log(jwt);
            localStorage.setItem("token", jwt);
           // this.props.history.push("/");
           window.location = "/";
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