import React, { Component } from "react";



class Clicked extends Component {
	constructor(props) {

		super(props);

		this.state = {
			message: 'not clicked',
		};

		this.clicked = this.clicked.bind(this);
	}






	clicked() {
		this.setState({ message: 'clicked' })
	}

	render() {
		return (

		    <div
		        onClick={ this.clicked }
		    >
		        <h1>{ this.state.message }</h1>
		    </div>
		);
	}
}

export default Clicked;