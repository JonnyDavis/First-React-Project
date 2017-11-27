// import the React library
import React from "react";


const divStyle = {
	backgroundColor: 'red',
	height: 200,
	width: 200,
}


// create our component
// just a function that returns JSX
const Square = () => (
    <div style={divStyle}> </div>
);

// export our component
export default Square;