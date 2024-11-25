import React from "react";
//By Functional Parameters
const destprops = ({ name, heroName }) => {
  //   console.log(props);
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};
//By Using in functional body
const destprops1= props => {
    const {name, heroName} = props
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
    );
}
export {destprops, destprops1};
