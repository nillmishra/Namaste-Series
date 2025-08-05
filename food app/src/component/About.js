import React from "react";
import UserClass from "./UserClass"; // Import UserClass component from separate file

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor Called");
  }
  componentDidMount() {
    //Is Used For API Call
    // console.log("Parent componentMountCalled");
  }
  render() {
    // console.log("Parent Render Called");
    return (
      <div>
        <h1>This is my react app About Page</h1>
        {/* Render UserClass component with props */}
        <UserClass
          name={"Nill Mishra"}
          location={"Darbhanga"}
          contact={"nillmishra09@gmail.com"}
        />
      </div>
    );
  }
}

export default About; // Export About as default
