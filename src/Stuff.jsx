// import the React library
import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";


// create our component
// just a function that returns JSX
const Stuff = () => (
    <div>
        <Header />
        <Paragraph />
        <Square />
        <People />
    </div>
);

// export our component
export default Stuff;