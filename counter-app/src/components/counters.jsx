import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {

    render() { 
        return ( 
            <div>
                <button onClick={this.props.onReset} type="button" className="btn btn-primary">Reset</button>
                {this.props.counters.map(counter => 
                    <Counter key={counter.id} onDelete={this.props.onDelete} onDecrement={this.props.onDecrement} onIncrement={this.props.onIncrement} counter={counter} />
                )}
            </div> 
        );
    };
}
 
export default Counters; 