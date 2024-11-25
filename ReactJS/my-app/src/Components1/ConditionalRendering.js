import React, { Component } from "react";
class ConditionalRendering extends Component {
  render() {
    //By using If/Else statement
    // if (this.state.isLoggedIn) {
    //   return <h1>Welcome User</h1>;
    // } else {
    //   return <h1>Welcome Guest</h1>;
    // }

    //By Using Variables
    //     let wel
    //     if (this.state.isLoggedIn) {
    //       wel = <h1>Welcome User</h1>;
    //     } else {
    //       wel = <h1>Welcome Guest</h1>;
    //     }
    //     return <div>{wel}</div>;
    //   }

    //By using ternary operator
    // return this.state.isLoggedIn ? (
    //   <h1>Welcome User</h1>
    // ) : (
    //   <h1>Welcome Guest</h1>
    // );

    //By using short circuit operator
    return this.state.isLoggedIn && <h1>Welcome User</h1>;
  }
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }
}
export default ConditionalRendering;
