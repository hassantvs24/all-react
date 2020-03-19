import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {

    render() { 
        const {onReset, counters, onDelete, onDecrement, onIncrement} = this.props;
        return ( 
            <div>
                <button onClick={onReset} type="button" className="btn btn-primary">Reset</button>
                {counters.map(counter => 
                    <Counter key={counter.id} onDelete={onDelete} onDecrement={onDecrement} onIncrement={onIncrement} counter={counter} />
                )}
            </div> 
        );
    };
}
 
export default Counters; 