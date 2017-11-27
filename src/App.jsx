import React from 'react';
import './App.css';
import Header from "./trixsy/Header";
import Aside from "./trixsy/Aside";
import Main from "./trixsy/Main";

const App = () => (
    <div>
      <Header className="col-md-12" />
      <Aside className="col-md-4"/>
      <Main className="col-md-8"/>
    </div>
);  

export default App;
