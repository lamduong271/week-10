import React from "react";

export default function MyHOC(Component, { name }) {
  return (
    <div className="wrapper">
      <Component name={name} />
    </div>
  );
}
