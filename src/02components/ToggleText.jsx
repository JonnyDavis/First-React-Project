import React, { Component } from "react";



class ToggleText extends Component {
	constructor(props) {

		super(props);

		this.state = {
			initial: true,
		};

		this.clicked = this.clicked.bind(this);
	}






	clicked() {
		this.setState({ initial: !this.state.initial })
	}

	render() {
		
		let { initial, alternate } = this.props;

		return (

		    <div>
				<p>{this.state.initial ? initial : alternate}</p>

			    <button 
			    onClick={ this.clicked }
			    >
			    Toggle  
			    </button>
			</div>
		);
	}
}

export default ToggleText;