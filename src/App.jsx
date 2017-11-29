import React from 'react';
import './App.css';
import Clicked from "./02components/Clicked";
import Square from "./02components/Square";
import ToggleText from "./02components/ToggleText";
import Counter from "./02components/Counter";
import StepCounter from "./02components/StepCounter";
import CatchMeIfYouCan from "./02components/CatchMeIfYouCan";
import Length from "./02components/Length";
import List from "./02components/List";
import Adder from "./02components/Adder";


const App = () => (
    <div>
    	<Clicked />
    	<Square color1="blue" color2="hotpink" />
    	<ToggleText initial="Hello" alternate="World" />
    	<Counter max="5"/>
    	<StepCounter max={10} step={5}/>
    	<CatchMeIfYouCan jump={100} />
    	<Length />
    	<List />
    	<Adder />

    </div>
);  

export default App;
