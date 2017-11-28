// import the React library
import React from "react";


// const divStyle = {
// 	backgroundColor: 'red',
// 	height: 200,
// 	width: 200,
// }


// create our component
// just a function that returns JSX
const Square = ({color, square}) => (
    <div style={{ height: 200, width: 200, background: color ? color : 'red' }}> </div>
);

// export our component
export default Square;