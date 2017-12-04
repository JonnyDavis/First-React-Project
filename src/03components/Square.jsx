import React from "react";

export default ({ black, onClick, background, colour }) => (
	<div
	style={{height: 200, width: 200, background: colour, border: '5px solid', borderColor: black ? "black" : "hotpink" }}
	className={ "square " + (black ? "square1" : "square2") }
	onClick={ onClick }
	>

	</div>


	);


