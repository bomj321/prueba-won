import React, { Component } from "react";
import { FormLoginView } from "../components/FormLoginView";

export class Home extends Component {
  render() {
    return <FormLoginView setToken={this.props.setToken} />;
  }
}

export default Home;
