import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';
import Like from "./common/like";
import Pagination from './common/pagination';


class Movies extends Component {
    state = {
        movies: getMovies(),
        currentPage:1,
        pageSize: 4
    }

    delMovie = movie =>{
       const movies = this.state.movies.filter(m => m._id !== movie._id);
       this.setState({movies:movies});
    }

    handleLike = movie =>{
       // console.log('Click Liked: ', movie);
       const movies = [...this.state.movies];
       const index = movies.indexOf(movie);
       movies[index] = {...movies[index]};
       movies[index].liked = !movies[index].liked;
       this.setState({movies});
    }

    handlePageChange = page =>{
        this.setState({currentPage: page});
    }

    render(){
        const {length: count} = this.state.movies;
        const {pageSize, currentPage} = this.state;

        return (
            <React.Fragment>
                    <p>{this.getMovieCount()}</p>
                    <table className={this.state.movies.length === 0 ? 'table invisible': 'table'}>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rate</th>
                                <th></th>
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
                                    <td><Like onClick={() => this.handleLike(movie)} liked={movie.liked} /></td>
                                    <td><button onClick={() => this.delMovie(movie)} type="button" className="btn btn-danger">Delete</button></td>
                                </tr>)}
                        </tbody>
                    </table>

                    <Pagination itemCount={count} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange} />
                
            </React.Fragment>
        );
    }

    getMovieCount(){
        const counter = this.state.movies.length;
        switch(counter) {
            case 0:
              return `No more movie in the database`;
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