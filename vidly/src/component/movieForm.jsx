import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import {getGenres} from '../services/genreService';
import {getMovie, saveMovie} from '../services/movieService';
import {toast} from 'react-toastify';

class MovieFrom extends Form {
    state = {
        data: {
            title: '', 
            genreId:'', 
            numberInStock: '', 
            dailyRentalRate: ''
        },
        genres: [],
        errors: {}
    };

    schema = {
        _id: Joi.string(),
        title: Joi.string().required().min(3).label('Movie Title'),
        genreId: Joi.string().required().label('Genre'),
        numberInStock: Joi.number().required().min(0).max(100).label('Number in Stock'),
        dailyRentalRate: Joi.number().required().min(0).max(10).label('Daily Rental Rate')
    }

    async populateGenre(){
        const {data: getGenre} = await getGenres();
        const genres = [{ _id: '', name: 'Select Genres'}, ...getGenre];
        this.setState({genres});
    }

    async populateMovie(){
        try{
            const movieId = this.props.match.params.id;
            if(movieId === "new") return;

            const {data: movie} = await getMovie(movieId);
            this.setState({data: this.mapToViewModal(movie)});
        } catch (ex) {
            if(ex.response && ex.response.status === 404) 
              return this.props.history.replace("/not-found");
        }
    }

    async componentDidMount(){
        this.populateGenre();
        this.populateMovie();
    }

    mapToViewModal(movie){
        return {
            _id: movie._id, 
            title: movie.title, 
            genreId: movie.genre._id, 
            numberInStock: movie.numberInStock, 
            dailyRentalRate: movie.dailyRentalRate
        }
    }

   doSubmit = async () => {
       //Call the server
       await saveMovie(this.state.data);
       toast.success('Movies list are successfully updated.');
       this.props.history.push("/movies");
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