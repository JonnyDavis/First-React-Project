import React from "react";

export default ({ label, onChange, value, submit }) => (
	<div className="form-group">
		<label>{ label }</label>
		<input 
		className="form-control" 
		onChange={ onChange } 
		value={ value }
		style={{ border: '2px solid white', borderColor:  submit === true && value.length === 0  ? 'red' : 'black'  }}
		
		 />
		 
		
		
	</div>

)