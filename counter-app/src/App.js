import React, { Component } from 'react';
import './App.css';
import Counters from "./components/counters";
import Navbar from "./components/navbar";


class App extends Component {
    state = { 
      counters: [
          {id:1, value: 4},
          {id:2, value: 0},
          {id:3, value: 0},
          {id:4, value: 8}
      ]
    };

    constructor(){ //For initialize properties
      super();
      console.log("App - Constructor");
    }

    componentDidMount(){
      //Ajax call
      console.log("App - Mounted");
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];//Spread operator
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;

        this.setState({counters});

    };

    handleDecrement = counter => {
        const counters = [...this.state.counters];//Spread operator
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;

        if(counters[index].value >= 0)
        this.setState({counters});
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
      console.log("App - Render");
      return (      
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <div className="container">
          <Counters 
            onReset={this.handleReset}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </div>
      </React.Fragment>
      );
    }
}
 
export default App;

//59

