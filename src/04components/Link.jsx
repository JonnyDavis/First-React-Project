import React from 'react';
import { Link } from "react-router-dom";

export default ({ children, subtitle }) => (
    <div className="page-header">
        <h1>
            <Link to="/">
                Home
            </Link>
            { ' ' }
            { subtitle ? <small>{ subtitle }</small> : null }
        </h1>
        <h1>
            <Link to="/buttons">
            	Buttons
            </Link>
            { ' ' }
            { subtitle ? <small>{ subtitle }</small> : null }
        </h1>
        <h1>
            <Link to="/form">
                Form (Includes Signup, FormFields)
            </Link>
            { ' ' }
            { subtitle ? <small>{ subtitle }</small> : null }
        </h1>
        <h1>
            <Link to="/Squares/:colour">
            	Squares
            </Link>
            { ' ' }
            { subtitle ? <small>{ subtitle }</small> : null }
        </h1>
        <h1>
            <Link to="/StepCounter/:max/:step">
            	StepCounter
            </Link>
            { ' ' }
            { subtitle ? <small>{ subtitle }</small> : null }
        </h1>

    </div>
);