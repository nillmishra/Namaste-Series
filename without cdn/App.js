import React from "react";
import { createRoot } from "react-dom/client";
// const heading = React.createElement("h1", {id: "heading"}, "Hello World from Without CDN React!");
// console.log(heading); //object

//Using JSX
//React Element
const jsxHeading = <h1 id="heading">Namaste Ji Kay Haal Chal!</h1>

const Heading = () => <h1 id="heading">Namaste Ji Kay Haal Chal!</h1>;

//React Functional Component
const HeadingComponent = () =>(
    <div>
        <Heading/>
        <h1>Namaste from component!</h1>
    </div>
);
    
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)

// root.render(jsxHeading); 
//render jo hai uss object ko lender h1 tag banakar div mai daal raha hai