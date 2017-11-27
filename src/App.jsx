import React from 'react';
import './App.css';
import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";


const App = () => (
    <div>
      <Header text="Insert Title Here" />
      <Paragraph message="hello" />
      <Square />
      <People />
    </div>
);  

export default App;
