import React from "react";
import dayjs from "dayjs";
import "./index.css";

export default (props) => {
  const { message, time, userName } = props;
  if (!message) {
    return null;
  }
  return (
    <div className="messageWrapper">
      {(userName && <div className="userClass">{userName} </div>) || null}
      <div className="message">{message}</div>
      {(time && (
        <div className="timeClass">{dayjs(time).format("DD/MM/YYYY")}</div>
      )) ||
        null}
    </div>
  );
};
