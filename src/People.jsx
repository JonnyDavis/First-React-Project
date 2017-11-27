// import the React library
import React from "react";

const names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const listItems = names.map((name) =>
    <li key={name.toString()}>
    {name}
    </li>	

    );

// create our component
// just a function that returns JSX
const App = () => (
    <ul>{listItems}</ul>
);

// export our component
export default App;