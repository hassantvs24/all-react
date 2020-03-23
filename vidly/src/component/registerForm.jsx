import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class RegisterForm extends Form {
    state = {
        data: {username: '', password: '', name: ''},
        errors: {}
    };

    schema = {
        username: Joi.string().email().required().min(3).label('Username'),
        password: Joi.string().required().min(6).label('Password'),
        name: Joi.string().required().min(3).label('Name')
    }


   doSubmit = () => {
       //Call the server
       console.log('Submitted');
   }


   render() { 
       return ( 
           <div>
               <h1>Register</h1> 

               <form onSubmit={this.handleSubmit}>
                   {this.renderInput('username', 'Email', 'email')}
                   {this.renderInput('password', 'Password', 'password')}
                   {this.renderInput('name', 'Name')}
                   {this.renderButton('Register')}
               </form>

           </div>
       );
   }
}
 
export default RegisterForm;