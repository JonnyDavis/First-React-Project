// import the React library
import React from "react";

// create our component
// just a function that returns JSX
const Paragraph = ({ children }) => (
    <p> { children ? children : "Hello, World!" } </p>
);

// export our component
export default Paragraph;