import React from 'react';
import './App.css';
import Buttons from './03components/Buttons.jsx';
import SignUp from './03components/SignUp.jsx';
import FormFields from './03components/FormFields.jsx';
import Header from './01components/Header.jsx';
import Link from './04components/Link.jsx';
import FourOhFour from './04components/FourOhFour.jsx';
import Squares from './03components/Squares.jsx';
import Length from './02components/Length.jsx';
import StepCounter from './02components/StepCounter.jsx';


import {
	BrowserRouter as Router,
	Route,
	Switch,
} from "react-router-dom";

const App = () =>  (
   	<Router>
	    <div>
	    	<Header> Title </Header>
	    	<Switch>
		    	<Route path="/buttons" component={ Buttons }/>
		    	<Route exact path="/" component={ Length }/>
		    	<Route path="/form" component={ SignUp }/>
		    	<Route path="/Squares/:colour" render={ ({ match }) => (
		    		<Squares colour={ match.params.colour } />
		    		)} />
		    	<Route path="/StepCounter/:max/:step" render={ ({ match }) => (
		    		<StepCounter step={ match.params.step } max={ match.params.max }/>
		    		)} />
		    	<Route path="/form" component={ FormFields }/>
	    		<Route component={ FourOhFour }/>
		    </Switch>
	    	<Link />
	    </div>
    </Router>
);  

export default App;
