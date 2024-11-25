import React from "react";
const Hello = () => {
  //   return (
  //     <div>
  //       <h1>Hello World</h1>
  //     </div>
  //   );
  return React.createElement(
    "div",
    null,
    React.createElement("h1", { id: "Shannu", className: "s" }, "Hello Shannu")
  );
};
export default Hello;
