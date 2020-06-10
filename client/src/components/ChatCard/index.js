import React from "react";
import Avatar from "../Avatar";
import Message from "../Message";
import "./index.css";

export default (props) => {
  const { avatar, email, message, timestamp, fullName } = props;
  return (
    <div className="chatCard">
      <Avatar imgSrc={avatar} tooltipText={email} />
      <Message message={message} time={timestamp} userName={fullName} />
    </div>
  );
};
