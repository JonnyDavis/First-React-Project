import React, { Component } from "react";



class StepCounter extends Component {
	constructor(props) {

		super(props);

		this.state = {
			counter: 0,
		};

		this.clickedPlus = this.clickedPlus.bind(this);
		this.clickedMinus = this.clickedMinus.bind(this);
	}






	clickedPlus() {
		let current = this.state.counter;
		this.setState({ counter: current + this.props.step })
	}

	clickedMinus() {
		let current = this.state.counter;
		this.setState({ counter: current - this.props.step })
	}

	render() {
		
		

		return (

		    <div>
				<p>{ this.state.counter }</p>

			    <button 
			    onClick={ this.state.counter < this.props.max ? this.clickedPlus : null }
			    >
			    + 
			    </button>
			    <button 
			    onClick={ this.state.counter > 0 ? this.clickedMinus : null }
			    >
			    - 
			    </button>			    
			</div>
		);
	}
}

export default StepCounter;