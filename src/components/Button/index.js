import React from "react";

import "./styles.css";

const index = (props) => {
  const { text } = props;

  return (
    <button {...props} className="button">
      {text}
    </button>
  );
};

export default index;
