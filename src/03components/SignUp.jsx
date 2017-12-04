import React, { Component } from "react";
import Password from "./Password.jsx";

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			inputs: [
				{label: "Password", value: ""},
				{label: "Confirm Password", value: ""},
			],
		}; 
	}

	update(index, value) {
		let inputs = this.state.inputs;
		inputs[index].value = value;
		this.setState({ inputs });

	}

	render() {
		return( 
			<form>
				{ this.state.inputs.map(({label, value}, i) => (
					<Password
						key={ i }
						label={ label }
						value={ value }


						onChange={ (e) => this.update(i, e.target.value) }
					/>


				))}

			</form>

		)

	}
}



export default SignUp;