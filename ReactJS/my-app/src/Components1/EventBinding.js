import React, { Component } from "react";

class EventBinding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Shannu",
    };
    // this.clickHandler = this.clickHandler.bind(this);
  }
  //   clickHandler() {
  //     this.setState({
  //       message: "Bye ra shannu",
  //     });

  //   }
  clickHandler = () => {
    this.setState({
      message: "Bye ra shannu",
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}
export default EventBinding;
