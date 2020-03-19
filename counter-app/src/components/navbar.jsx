import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        return ( 
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
        Navbar <span className="badge badge-pill secondary">{this.props.totalCounters}</span>
                </a>
            </nav> 
        );
    }
}
 
export default Navbar;