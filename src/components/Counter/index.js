import React, { Component } from 'react';
//hoa alepz
class Counter extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
	}

	handleCountClick = (event) => {
    console.log(event.target.id)
		 if (event.target.id === 'add') {
		 	this.setState({
		 		count: this.state.count + 1
		 	});
		 } else if (event.target.id === 'susbstract' && this.state.count > 0) {
		 	this.setState({
		 		count: this.state.count - 1
		 	});
		 } else {
		 	this.setState({
		 		count: 0
		 	});
		 }
	}

  render() {
    console.log("hooli soy el render ")
    console.log(this)
    return (
      <div className="Counter">
        <h1> Counter: {this.state.count }</h1>

        <p>
        	<button id="add" className="hola" onClick={this.handleCountClick}>+</button>
        	<button id="susbstract" onClick={this.handleCountClick}>-</button>
        	<button id="reset" onClick={this.handleCountClick}>Reset</button>
        </p>

      </div>
    );
  }
}

export default Counter;
