// import the React library
import React from "react";

// create our component
// just a function that returns JSX
const Paragraph = ({ message }) => (
    <p> { message ? message : "Hello, World!" } </p>
);

// export our component
export default Paragraph;