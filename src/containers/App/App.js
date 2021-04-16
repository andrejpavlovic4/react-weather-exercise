import React, { Component } from "react";

import Weather from "../Weather/Weather";

class App extends Component {
  style = {
    backgroundImage: "url(./background-image.jpg)",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };

  render() {
    return (
      <div style={this.style}>
        <Weather />
      </div>
    );
  }
}

export default App;
