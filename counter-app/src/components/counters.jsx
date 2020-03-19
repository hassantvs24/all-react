import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    state = { 
        counters: [
            {id:1, value: 4},
            {id:2, value: 0},
            {id:3, value: 0},
            {id:4, value: 8}
        ]
     };

     handleReset = () => {
       const counters = this.state.counters.map(c => {
           c.value = 0;
           return c;
       });
       this.setState({counters});
      };

    handleDelete = (counterID) => {
        const counters = this.state.counters.filter(m => m.id !== counterID);
        this.setState({counters:counters});
    };

    render() { 
        return ( 
            <React.Fragment>
                <button onClick={this.handleReset} type="button" class="btn btn-primary">Reset</button>
                {this.state.counters.map(counter => 
                    <Counter key={counter.id} onDelete={this.handleDelete} counter={counter} />
                )}
            </React.Fragment> 
        );
    };
}
 
export default Counters; 