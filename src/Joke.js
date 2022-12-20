import React, { Component } from "react";

class Jokes extends Component {
  render() {
    return <li>{this.props.newJoke}</li>;
  }
}

export default Jokes;
