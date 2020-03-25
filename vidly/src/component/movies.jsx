import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';
import {getGenres} from '../services/fakeGenreService';
import {paginate} from '../utils/paginate';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import SearchBox from './common/searchBox';
import MoviesTable from './moviesTable';
import { Link } from 'react-router-dom';
import _ from 'lodash';




class Movies extends Component {
    state = {
        movies: [],
        genres: [],
        currentPage:1,
        pageSize: 4,
        searchQuery: "",
        selectedGenre: null,
        sortColumn: {path: 'title', order: 'asc'}
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
       this.setState({selectedGenre: genre, searchQuery: "", currentPage: 1});
    }

    handleSearch = query => {
        this.setState({searchQuery: query, selectedGenre: null, currentPage: 1});
    }

    handleSort = sortColumn => {
        this.setState({sortColumn});
    }

    getPagedData = () => {
        const {pageSize, currentPage, selectedGenre, sortColumn, searchQuery,  movies:allMovies} = this.state;
        let filtered = allMovies;
        if(searchQuery)
        filtered = allMovies.filter(m => 
            m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            );
            else if (selectedGenre && selectedGenre._id)
            filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        const movies = paginate(sorted, currentPage, pageSize);

        return {totalCount : filtered.length, data: movies};
    }

    render(){
        const {totalCount, data: movies} = this.getPagedData();
        const {pageSize, currentPage, sortColumn, searchQuery} = this.state;
        return (
                <div className="row mt-5">
                    <div className="col-md-3">
                        <ListGroup items={this.state.genres} selectedItem={this.state.selectedGenre}  onItemSelect={this.handleGenreSelect} />
                    </div>
                    <div className="col">
                        <Link to="/movies/new"  className="btn btn-primary mb-2">New Movie</Link>
                        <p>{this.getMovieCount(totalCount)}</p>
                        <SearchBox value={searchQuery} onChange={this.handleSearch} />

                        <MoviesTable movies={movies} sortColumn={sortColumn} onSort={this.handleSort} onDelete={this.delMovie} onLike={this.handleLike} />

                        <Pagination itemCount={totalCount} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange} />
                    </div>
                </div>
         
        );
    }

    getMovieCount(movies){
        const counter = movies;
        switch(counter) {
            case 0:
              return `No more movie in the database`;
            case 1:
                return `Showing ${counter} Movie in the database.`;
            default:
                return `Showing ${counter} Movies in the database.`;
          }
    }
}


export default Movies;