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

    handleDelete = (counter) => {
        const counters = this.state.counters.filter(m => m.id !== counter.id);
        this.setState({counters:counters});
    };

    render() { 
        return ( 
            <React.Fragment>
                {this.state.counters.map(counter => 
                    <Counter key={counter.id} value={counter.value} id={counter.id} onDelete={() => this.handleDelete(counter)}/>
                )}
            </React.Fragment> 
        );
    };
}
 
export default Counters;