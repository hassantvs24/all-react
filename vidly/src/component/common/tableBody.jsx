import React, { Component } from 'react';
import Like from "./like";

class TableBody extends Component {
    render() { 
        const {movies, onLike, onDelete} = this.props;
        return ( 
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
         );
    }
}
 
export default TableBody;