import React, { Component } from "react";



class CatchMeIfYouCan extends Component {
	constructor(props) {

		super(props);

		this.state = {
			position: 0,
		};

		this.clicked = this.clicked.bind(this);
	}


	clicked() {
		let current = this.state.position;
		this.setState({ position: current + this.props.jump })
	}


	render() {
		
		

		return (

		    <div>
			    <button 
			    style={{ position: 'relative', top: this.state.position }}
			    onClick={ this.clicked }
			    >
			    Jump
			    </button>
			</div>
		);
	}
}

export default CatchMeIfYouCan;