import React from "react";
import Person1 from "./Person1";

function NameListRend() {
  const named=["Ayeshu","Shannu","Vinay","Deva","Varda Manar","Shannu"];
  const names = [
    {
      id: 1,
      name: "Shannu",
      age: 23,
      skill: "Learning React",
    },
    {
      id: 2,
      name: "Vinay",
      age: 24,
      skill: "Enterpreneur",
    },
    {
      id: 3,
      name: "Deva",
      age: 23,
      skill: "Js Developer",
    },
    {
      id: 4,
      name: "Vardha Manar",
      age: 24,
      skill: "Java Developer",
    },
  ];
  const nameList= named.map((name1,index) => <h1 key={index}>{index} {name1}</h1>)
  return <div>{nameList}</div>
  // const nameList = names.map((name1) => <Person1 key={name1.id}  namee={name1} />);
  // return <div>{nameList}</div>;

}
export default NameListRend;
