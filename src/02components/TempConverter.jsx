import React, { Component } from "react";

toFarenheit(f) {
	return (f * 5 / 9) + 32;
};

toCelsius(c) {
	return (c - 32) * 5 / 9;
};

convert(value, convert) {
	const output = convert(value);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
};


class TempConverter extends Component {
	constructor(props) {

		super(props);

		this.state = {
			value: '',
			type: 'c',
		};

		this.updateC = this.updateC.bind(this);
		this.updateF = this.updateF.bind(this);


	}



	updateC(e) {
		this.setState({ C: e.target.value, type: 'c' });
	}

	updateF(e) {
		this.setState({ C: e.target.value, type: 'f' });
	}


	render() {
		const type = this.state.type;
		const value = this.state.value;
		const celsius = type === 'f' ? convert(value, toCelsius) : value;
		const farenheit = type ==== 'c' ? convert(value, toFarenheit) : value;
		

		return (
			<div className="form-group">
				<input label="°C" type="number" onChange={ this.updateC } value={this.state.C} className="form-control"/>
				<input label="°F" type="number" onChange={ this.updateF } value={this.state.F} className="form-control"/>

			</div>
		);
	}
}

export default TempConverter;


// F to C :  ( - 32)*.5556
// C to F : ( * 1.8)+32