import React, { Component } from "react";

class DestructuringClass extends Component {
  render() {
    const { name, heroName } = this.props;
    console.log(this.props);
    return (
      <h1>
        Welcome {name} a.k.a {heroName}
      </h1>
    );
  }
}
export default DestructuringClass;
