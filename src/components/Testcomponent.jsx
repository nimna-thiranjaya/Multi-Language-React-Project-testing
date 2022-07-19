import React from "react";

const Testcomponent = ({ translateArray }) => {
  console.log(translateArray("statement_03"));
  return (
    <div>
      <hr />
      <h1>hello , {translateArray("statement_03")}</h1>
    </div>
  );
};

export default Testcomponent;
