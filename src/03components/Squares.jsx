import React, { Component } from "react";
import Square from "./Square.jsx";

class Squares extends Component {
	constructor(props) {
		super(props);
		this.state = { selected: 1, black: true };


	}

	clicked(id, status) {
		this.setState({ selected: id, black: status })
	}

	render() {
		return (	
		<div>
			<Square
				selected={ this.state.selected === 1 }
				black={ this.state.black === true }
				onClick={ () => this.clicked(1, false) }
				colour={ this.props.colour }

			/>
			<Square
				selected={ this.state.selected === 2}
				black= {this.state.black === false }
				onClick={ () => this.clicked(2, true) }
				colour={ this.props.colour }

			/>
		</div>
		);
	}
};


export default Squares;


/*

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

*/