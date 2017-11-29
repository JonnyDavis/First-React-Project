import React, { Component } from "react";



class Square extends Component {

	constructor(props) {
		
		super(props);

		this.state = {
			black: true,
		};

		this.clicked = this.clicked.bind(this);


	}


	clicked() {
		this.setState({ black: !this.state.black })

	}


	render() {

		let { color1, color2 } = this.props;


		return (
			
			<div 
			style={{ height: 200, width: 200, background: color1 ? color1 : 'red',  border: '5px solid', borderColor: this.state.black ? 'black' : color2  }}
			onClick={ this.clicked } 
			> { this.state.black } 
			</div>



		);

	}

}


    


export default Square;