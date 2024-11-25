import React, { Component } from "react";

class ClickClass extends Component {
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click on me</button>
      </div>
    );
  }
  clickHandler() {
    console.log("Button clicked by the Ram");
  }
}
export default ClickClass;
