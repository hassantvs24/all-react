import React, { Component } from "react";

class Counter extends Component {

  componentDidUpdate(prevProps, prevState){ //Using for ajax call optimization
    console.log("prevProps",prevProps);
    console.log("prevState",prevState);

    if(prevProps.counter.value !== this.props.counter.value){
      //Ajax call and get new data from server
    }
  }

  componentWillUnmount(){
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Render");
    const {counter, onIncrement, onDecrement, onDelete} = this.props;
    return (
      <div>
        <h4>Counter # {counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => onIncrement(counter)} className="btn btn-success btn-sm">+</button>
        <button onClick={() => onDecrement(counter)} className="btn btn-secondary btn-sm m-2">-</button>
        <button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  getBadgeClasses() {
    const {counter} = this.props;
    let classes = "badge m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const {counter} = this.props;
    const { value } = counter;
    return value === 0 ? "0" : value;
  }
}

export default Counter;
