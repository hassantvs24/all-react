import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class LoginFrom extends Form {
     state = {
         data: {username: '', password: ''},
         errors: {}
     };

     schema = {
         username: Joi.string().email().required().label('Username'),
         password: Joi.string().required().label('Password')
     }


    doSubmit = () => {
        //Call the server
        console.log('Submitted');
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