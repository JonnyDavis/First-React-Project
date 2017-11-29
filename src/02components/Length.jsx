import React, { Component } from "react";



class Length extends Component {
	constructor(props) {

		super(props);

		this.state = {
			value: "Insert Here",
		};

		this.update = this.update.bind(this);


	}

	update(e) {
		this.setState({ value: e.target.value });
	}


	render() {
		
		

		return (
			<div className="form-group">
				<input onChange={ this.update } value={this.state.value} className="form-control"/>
				<p className="help-block">Length: { this.state.value.length } characters</p>
			</div>
		);
	}
}

export default Length;