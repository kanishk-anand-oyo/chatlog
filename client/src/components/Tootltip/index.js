import React from "react";
import "./index.css";

export default (props) => {
  const { text } = props;
  if (!text) {
    return null;
  }
  return <div className="tooltip">{text}</div>;
};
