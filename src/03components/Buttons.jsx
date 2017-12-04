import React, { Component } from "react";
import Button from "./Button";

class Buttons extends Component {
	constructor(props) {
		super(props);
		this.state = { selected: 1 };
	}

	clicked(id) {
		this.setState({ selected: id })
	}

	render() {
		return (

			<div>
				<Button 
				name="First"
				selected={ this.state.selected === 1 }
				onClick={ () => this.clicked(1) }
				/>
				<Button 
				name="Second"
				selected={ this.state.selected === 2 }
				onClick={ () => this.clicked(2) }
				/>
				<Button 
				name="Third"
				selected={ this.state.selected === 3 }
				onClick={ () => this.clicked(3) }
				/>
				<Button 
				name="Fourth"
				selected={ this.state.selected === 4 }
				onClick={ () => this.clicked(4) }
				/>

			</div>

			
			)
	}
}


export default Buttons;
