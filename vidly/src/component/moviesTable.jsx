import React, {Component} from 'react';
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import Like from "./common/like";


class MoviesTable extends Component {

    columns = [
        {path: 'title',  label: 'Title'},
        {path: 'genre.name',  label: 'Genre'},
        {path: 'numberInStock',  label: 'Stock'},
        {path: 'dailyRentalRate',  label: 'Rate'},
        {key: 'like', content: movie => (<Like onClick={() => this.props.onLike(movie)} liked={movie.liked} />)},
        {key:'delete', label: 'Action', content: movie => (<button onClick={() => this.props.onDelete(movie)} type="button" className="btn btn-danger">Delete</button>)}
    ];

    render() { 
        const {movies, onDelete, onSort, onLike, sortColumn} = this.props;
        return ( 
            <table className={movies.length === 0 ? 'table invisible': 'table'}>
                <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort} />
                <TableBody data={movies} columns={this.columns} />
        </table>
         );
    }
}
 
export default MoviesTable;