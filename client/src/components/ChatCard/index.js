import React, { PureComponent } from "react";
import Avatar from "../Avatar";
import Message from "../Message";
import "./index.css";

export default class ChatCard extends PureComponent {
  render() {
    return (
      <div className="chatCard">
        <Avatar tooltipText={"Hello World"} />
        <Message
          message="Hello there"
          time="2017-02-23T14:57:20.629Z"
          userName="Kanishk Anand"
        />
      </div>
    );
  }
}
