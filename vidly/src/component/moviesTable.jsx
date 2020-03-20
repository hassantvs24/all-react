import React from 'react';
import Like from "./common/like";

const MoviesTable = (props) => {

    const {movies, onDelete, onLike, movieLength} = props;

    return ( 
        <table className={movieLength.length === 0 ? 'table invisible': 'table'}>
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
 
export default MoviesTable;