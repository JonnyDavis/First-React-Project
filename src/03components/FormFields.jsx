import React, { Component } from "react";
import Input from "./Input.jsx";

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			inputs: [
				{label: "First Name", value: ""},
				{label: "Last Name", value: ""},
				{label: "Email", value: ""},
			],

			submit: false,
		};

		this.submit = this.submit.bind(this); 
	}

	update(index, value) {
		let inputs = this.state.inputs;
		inputs[index].value = value;
		this.setState({ inputs });
		console.log(this.state.inputs[index].value);

	}

	submit(event) {
		event.preventDefault();
		this.setState({ submit: true });

	}


	render() {
		return( 
			<form
			onSubmit={ this.submit }
			>
				{ this.state.inputs.map(({label, value, state}, i) => (
					<Input
						key={ i }
						label={ label }
						value={ value }
						state={ state }
						submit= { this.state.submit }

						onChange={ (e) => this.update(i, e.target.value) }

						
					/>


				))}

				<button
				>
					Submit
				</button>

			</form>

		)

	}
}



export default SignUp;