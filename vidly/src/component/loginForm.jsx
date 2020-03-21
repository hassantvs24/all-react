import React, { Component } from 'react';

class LoginFrom extends Component {

    handleSubmit = e => {
        e.preventDefault();

        console.log('Submitted');
    };

    render() { 
        return ( 
            <div>
                <h1>Login</h1> 

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Email address</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter username" />
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