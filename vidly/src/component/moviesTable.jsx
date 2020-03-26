import React, {Component} from 'react';
import Like from "./common/like";
import Table from "./common/table";
import { Link } from 'react-router-dom';
import auth from '../services/authService';


class MoviesTable extends Component {

    columns = [
        {path: 'title',  label: 'Title', content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
        {path: 'genre.name',  label: 'Genre'},
        {path: 'numberInStock',  label: 'Stock'},
        {path: 'dailyRentalRate',  label: 'Rate'},
        {key: 'like', content: movie => (<Like onClick={() => this.props.onLike(movie)} liked={movie.liked} />)}
        
    ];

    deleteColumn = {key:'delete', label: 'Action', content: movie => (<button onClick={() => this.props.onDelete(movie)} type="button" className="btn btn-danger">Delete</button>)};

    constructor(){
        super();
        const user = auth.getCurrentUser();
        if(user && user.isAdmin) this.columns.push(this.deleteColumn);
    }

    render() { 
        const {movies, onSort, sortColumn} = this.props;
        return ( 
            <Table columns={this.columns} data={movies} sortColumn={sortColumn} onSort={onSort} />
         );
    }
}
 
export default MoviesTable;