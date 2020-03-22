import React, { Component } from 'react';
import Input from './common/input';

class LoginFrom extends Component {

     //username = React.createRef();

     state = {
         account: {username: '', password: ''}
     };

    handleSubmit = e => {
        e.preventDefault();

        //const username = this.username.current.value;
        console.log('Submitted');
    };


    handleChange = ({currentTarget: input}) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account});

    };

    render() { 
        const {account} = this.state;
        return ( 
            <div>
                <h1>Login</h1> 

                <form onSubmit={this.handleSubmit}>
                    <Input name="username" type="text" label="Username" value={account.username} onChange={this.handleChange} />
                    <Input name="password" type="password" label="Password" value={account.password} onChange={this.handleChange} />
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>

            </div>
        );
    }
}
 
export default LoginFrom;