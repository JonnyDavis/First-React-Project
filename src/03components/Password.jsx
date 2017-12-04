import React from "react";

export default ({ label, onChange, value }) => (
	<div className="form-group">
		<label>{ label }</label>
		<input 
		className="form-control" 
		onChange={ onChange } 
		style={{ border: '2px solid', borderColor: value.length < 12 ? 'red' : null }}
		value={ value }
		 />
	</div>

)