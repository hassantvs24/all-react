import React, { Component } from 'react';

class MovieFrom extends Component {

    
    render() {
        return ( 
            <div>
                <h1>Movie Details - {this.props.match.params.id}</h1>
                <button onClick={() => this.props.history.replace('/movies')} className="btn btn-primary">Save</button>
            </div>
            
        );
    }
}
 
export default MovieFrom;