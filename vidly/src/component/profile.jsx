import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';


class Profile extends Component {
    state = {  }

    // componentDidMount(){
    //     try{
    //       const jwt = localStorage.getItem('token');
    //       const user = jwtDecode(jwt);
    //       this.setState({user});
    //       console.log(user);
    //     } catch (ex) {
    //      // console.log('no token found');
    //     }
        
    //   }

    render() { 
        return ( 
            <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title">User Name</h5>
                    <a href="#" className="card-link">Email</a>
                </div>
            </div>
         );
    }
}
 
export default Profile;

