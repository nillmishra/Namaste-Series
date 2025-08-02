import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./component/Header"
import Body from "./component/Body"

const AppLayout = () => (
  <div className="App">
    <Header />
    <Body />
  </div>
);

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
