import React, { Component } from "react";



class List extends Component {

	constructor(props) {

		super(props);

		this.state = {
			value: "Insert Here",
			arr: [],
		};

		this.update = this.update.bind(this);
		this.clicked = this.clicked.bind(this);

	}

	update(e) {
		this.setState({ value: e.target.value });
	}

	clicked() {
		
		let array = this.state.arr.slice();
		array.push(this.state.value)
		this.setState({ arr: array });

		
		// this.setState({arr: e.target.value })
		// array.push(this.state.value);


	};


	render() {
		
		

		return (
			<div className="form-group">
				<input onChange={ this.update } value={this.state.value} className="form-control"/>
				<button onClick={ this.clicked }>
				Add
				</button>
				<ul>
				{this.state.arr.map((input, i) => (
					<li key={i} >
						{input}
					</li>


					))

				} 
				</ul>
			</div>
		);
	}
}

export default List;