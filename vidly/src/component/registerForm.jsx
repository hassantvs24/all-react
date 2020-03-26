import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import * as userService from '../services/userService';
import {ToastContainer, toast} from 'react-toastify';

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


   doSubmit = async () => {
       try{
         const response = await userService.register(this.state.data);
         localStorage.setItem("token", response.headers['x-auth-token']);
         this.props.history.push("/");
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
               <ToastContainer />

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