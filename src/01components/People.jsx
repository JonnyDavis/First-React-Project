// import the React library
import React from "react";




// create our component
// just a function that returns JSX
const People = ({ names }) => (


    <ul>
    {names ?  names.map((name, i) => (
	    <li key={i}>
		    {name}
	    </li>	
    )) : "Nothing to see here"}
    </ul>
);

// export our component
export default People;