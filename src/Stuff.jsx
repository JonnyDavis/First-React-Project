// import the React library
import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";


// create our component
// just a function that returns JSX
const Stuff = ({square}) => (
    <div>
      <Header> 
      Title
      </Header> 
      <Paragraph>
      Hello There
      </Paragraph>
      { square ? <Square color="blue" /> : null}
      <People names={["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]} />
    </div>
);

// export our component
export default Stuff;