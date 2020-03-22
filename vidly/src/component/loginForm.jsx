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
        account.username = e.currentTarget.value;
        this.setState({account});

    };

    render() { 
        return ( 
            <div>
                <h1>Login</h1> 

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Email address</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter username" value={this.state.account.username} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>

            </div>
        );
    }
}
 
export default LoginFrom;