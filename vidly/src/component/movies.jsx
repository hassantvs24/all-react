import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';
import {getGenres} from '../services/fakeGenreService';

import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';
import {paginate} from '../utils/paginate';


class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage:1,
        pageSize: 4
    }

    componentDidMount(){
        const genres = [{ _id: '', name: 'All Genres'}, ...getGenres()];
        this.setState({movies: getMovies(), genres});
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

    handleGenreSelect = genre => {
       // console.log(genre);
       this.setState({selectedGenre: genre, currentPage: 1});
    }

    handleSort = path => {
        console.log(path);
    }

    render(){
        //const {length: count} = this.state.movies;
        const {pageSize, currentPage, selectedGenre, movies:allMovies} = this.state;
        const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
        const movies = paginate(filtered, currentPage, pageSize);
        return (
           
                <div className="row mt-5">
                    <div className="col-md-3">
                        <ListGroup items={this.state.genres} selectedItem={this.state.selectedGenre}  onItemSelect={this.handleGenreSelect} />
                    </div>
                    <div className="col">
                        <p>{this.getMovieCount(filtered)}</p>

                        <MoviesTable movies={movies} onSort={this.handleSort} onDelete={this.delMovie} onLike={this.handleLike} />

                        <Pagination itemCount={filtered.length} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange} />
                    </div>
                </div>
         
        );
    }

    getMovieCount(movies){
        const counter = movies.length;
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