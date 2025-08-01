import React from "react";
import { createRoot } from "react-dom/client";
const heading = React.createElement("h1", {id: "heading"}, "Hello World from Without CDN React!");
console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //render jo hai uss object ko lender h1 tag banakar div mai daal raha hai