import React from "react";

const DetailsComponent = ({ topic }) => {
  return (
    <div>
      <h1>{topic.name}</h1>
      <p>{topic.details}</p>
    </div>
  );
};

export default DetailsComponent;
