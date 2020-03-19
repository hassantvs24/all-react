import React, { Component } from 'react';

//Stateless Functional Component sfc

const Navbar = (props) => {
    return ( 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
    Navbar <span className="badge badge-pill secondary">{props.totalCounters}</span>
            </a>
        </nav> 
    );
}
 
export default Navbar;