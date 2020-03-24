import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import {getGenres} from '../services/fakeGenreService';
import {getMovies} from '../services/fakeMovieService';

class MovieFrom extends Form {
    state = {
        genres: [],
        data: {title: '', genreId:'', numberInStock: '', dailyRentalRate: ''},
        errors: {}
    };

    schema = {
        title: Joi.string().required().min(3).label('Movie Title'),
        genreId: Joi.string().required().label('Genre'),
        numberInStock: Joi.number().required().min(0).max(100).label('Number in Stock'),
        dailyRentalRate: Joi.number().required().min(0).max(10).label('Daily Rental Rate')
    }

    componentDidMount(){
        const genres = [{ _id: '', name: 'Select Genres'}, ...getGenres()];

        if(this.props.match.params.id != null){
           const movies = getMovies();
           const movie = movies.find(m =>  m._id == this.props.match.params.id ); 
            const movieData = {
                title: movie.title, 
                genreId: movie.genre._id, 
                numberInStock: movie.numberInStock, 
                dailyRentalRate: movie.dailyRentalRate
            };
            this.setState({data: movieData, genres});
        }else{
            this.setState({genres});
        }
        
    }


   doSubmit = () => {
       //Call the server
       const {title, genre, numberInStock, dailyRentalRate} = this.state.data;
       
       this.props.history.push({
            pathname: '/movies',
            state: { movies: 'some_value' }
        });
   }
    
    render() {
        const {genres} = this.state;
        return ( 
            <div>
                <h1>Movie From</h1>
                <form onSubmit={this.handleSubmit}>
                   {this.renderInput('title', 'Movie Title')}
                   {this.renderSelect('genreId', 'Genre', genres)}
                   {this.renderInput('numberInStock', 'Number in Stock', 'number')}
                   {this.renderInput('dailyRentalRate', 'Rental Rate', 'number')}
                   {this.renderButton('Save')}
               </form>
            </div>
            
        );
    }
}
 
export default MovieFrom;