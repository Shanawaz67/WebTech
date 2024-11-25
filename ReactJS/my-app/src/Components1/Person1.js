import React from "react";
import NameListRend from "./NameListRend";
function Person1({ namee }) {
  return (
    <div>
      <h1>
          I am {namee.name}, I am {namee.age} years old, I know {namee.skill},
          {namee.id}
      </h1>
    </div>
  );
}
export default Person1;
