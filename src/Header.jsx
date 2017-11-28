// import the React library
import React from "react";

// create our component
// just a function that returns JSX
const Header = ({children}) => (
    <h1>
    { children }
    {" "}
    </h1>
);

// export our component
export default Header;