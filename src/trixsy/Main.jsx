// import the React library
import React from "react";
import MainParagraph from "./MainParagraph";
import MainListGroup from "./MainListGroup";
import MainListPagination from "./MainListPagination";
// create our component
// just a function that returns JSX
const App = () => (
    <main className="col-md-8">
    	<MainParagraph />
    	<MainListGroup />
    	<MainListPagination />
    </main>
);

// export our component
export default App;