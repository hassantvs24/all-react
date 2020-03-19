import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';


class Movies extends Component {
    state = {
        movies: getMovies()
    }

    delMovie = (movie) =>{
       const movies = this.state.movies.filter(m => m._id !== movie._id);
       this.setState({movies:movies});
    }

    render(){
        console.log();
        return (
            <React.Fragment>
                    <p>{this.getMovieCount()}</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.movies.map( movie => 
                                <tr key={movie._id}>
                                    <td scope="row">{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td><button onClick={() => this.delMovie(movie)} type="button" className="btn btn-danger">Delete</button></td>
                                </tr>)}
                        </tbody>
                    </table>
                
            </React.Fragment>
        );
    }

    getMovieCount(){
        const counter = this.state.movies.length;
        switch(counter) {
            case 0:
              return `No movies in the database`;
              break;
            case 1:
                return `Showing ${counter} Movie in the database.`;
              break;
            default:
                return `Showing ${counter} Movies in the database.`;
          }
    }
}


export default Movies;