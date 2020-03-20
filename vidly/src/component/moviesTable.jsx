import React, {Component} from 'react';
import Like from "./common/like";

class MoviesTable extends Component {
    raiseSort = path => { 
        const sortColumn = {...this.props.sortColumn};
        if (sortColumn.path === path)
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc': 'asc';
            else {
                sortColumn.path = path;
                sortColumn.order = 'asc';
            }

            this.props.onSort(sortColumn);
     };

    render() { 
        const {movies, onDelete, onLike} = this.props;
        return ( 
            <table className={movies.length === 0 ? 'table invisible': 'table'}>
            <thead>
                <tr>
                    <th onClick={() => this.raiseSort('title')}>Title</th>
                    <th onClick={() => this.raiseSort('genre.name')}>Genre</th>
                    <th onClick={() => this.raiseSort('numberInStock')}>Stock</th>
                    <th onClick={() => this.raiseSort('dailyRentalRate')}>Rate</th>
                    <th></th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {movies.map( movie => 
                    <tr key={movie._id}>
                        <td scope="row">{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><Like onClick={() => onLike(movie)} liked={movie.liked} /></td>
                        <td><button onClick={() => onDelete(movie)} type="button" className="btn btn-danger">Delete</button></td>
                    </tr>)}
            </tbody>
        </table>
         );
    }
}
 
export default MoviesTable;