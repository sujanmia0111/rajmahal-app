import React from "react";

const MenuItem = (props) => {
  console.log(props.dish.name);
  return (
    <div>
      <p>{props.dish.name}</p>
    </div>
  );
};

export default MenuItem;
