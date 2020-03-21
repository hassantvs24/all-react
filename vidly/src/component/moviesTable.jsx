import React, {Component} from 'react';
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";


class MoviesTable extends Component {

    columns = [
        {path: 'title',  label: 'Title'},
        {path: 'genre.name',  label: 'Genre'},
        {path: 'numberInStock',  label: 'Stock'},
        {path: 'dailyRentalRate',  label: 'Rate'},
        {key: 'like'},
        {key:'delete', label: 'Action'}
    ];

    render() { 
        const {movies, onDelete, onSort, onLike, sortColumn} = this.props;
        return ( 
            <table className={movies.length === 0 ? 'table invisible': 'table'}>
                <TableHeader columns={this.columns} sortColumn={sortColumn} onSort={onSort} />
                <TableBody movies={movies} onLike={onLike} onDelete={onDelete} />
        </table>
         );
    }
}
 
export default MoviesTable;