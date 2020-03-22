import React, { Component } from 'react';

class LoginFrom extends Component {

     username = React.createRef();

    handleSubmit = e => {
        e.preventDefault();

        const username = this.username.current.value;
        console.log(username);
    };

    render() { 
        return ( 
            <div>
                <h1>Login</h1> 

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Email address</label>
                        <input ref={this.username} type="text" className="form-control" id="username" placeholder="Enter username" />
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