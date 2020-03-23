import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './common/input';
import Form from './common/form';

class LoginFrom extends Form {

     //username = React.createRef();

     state = {
         data: {username: '', password: ''},
         errors: {}
     };

     schema = {
         username: Joi.string().required().label('Username'),
         password: Joi.string().required().label('Password')
     }


    doSubmit = () => {
        //Call the server
        console.log('Submitted');
    }


    render() { 
        const {data, errors} = this.state;
        return ( 
            <div>
                <h1>Login</h1> 

                <form onSubmit={this.handleSubmit}>
                    <Input name="username" type="text" label="Username" value={data.username} onChange={this.handleChange} error={errors.username} />
                    <Input name="password" type="password" label="Password" value={data.password} onChange={this.handleChange} error={errors.password} />
                    <button type="submit" className="btn btn-primary" disabled={this.validate()}>Login</button>
                </form>

            </div>
        );
    }
}
 
export default LoginFrom;