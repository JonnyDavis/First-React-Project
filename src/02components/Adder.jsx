import React, { Component } from "react";



class Adder extends Component {
	constructor(props) {

		super(props);

		this.state = {
			value: 0,
			arr: [],
			total: 0,
		};

		this.update = this.update.bind(this);
		this.clickedAdd = this.clickedAdd.bind(this);
		this.clickedTotal = this.clickedTotal.bind(this);

	}

	update(e) {
		this.setState({ value: e.target.value });
	}

	clickedAdd() {
		let array = this.state.arr.slice();
		array.push(this.state.value)
		this.setState({ arr: array });
		// console.log(this.state.arr);
	}

	clickedTotal() {
		let numbers = this.state.arr.map(Number);
		let total = numbers.reduce((acc, val) => ( acc + val));
		this.setState({ total: total });
		// console.log(this.state.total);
		// console.log(total);
	}


	render() {
		
		

		return (
			<div className="form-group">
				<input type="number" onChange={ this.update } value={this.state.value} className="form-control"/>
				<button onClick={ this.clickedAdd }>
				Add
				</button>
				<button onClick={ this.clickedTotal }>
				Total
				</button>
				<ul>
				{this.state.arr.map((input, i) => (
					<li key={i} >
						{input}
					</li>


					))

				} 
				</ul>
				<p>Total: { this.state.total }</p>

			</div>
		);
	}
}

export default Adder;