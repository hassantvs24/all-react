import React, { Component } from 'react';

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


    handleChange = e => {
        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({account});

    };

    render() { 
        const {account} = this.state;
        return ( 
            <div>
                <h1>Login</h1> 

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Email address</label>
                        <input name="username" type="text" className="form-control" id="username" placeholder="Enter username" value={account.username} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" className="form-control" id="password" placeholder="Password"  value={account.password} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>

            </div>
        );
    }
}
 
export default LoginFrom;