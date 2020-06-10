import React, { memo } from "react";
import { PLACEHOLDER_AVATAR } from "../../constants";
import Tooltip from "../Tootltip";
import "./index.css";

export default (props) => {
  const { avatar, tooltipText } = props;
  let finalImgUrl = avatar;
  if (!avatar) {
    finalImgUrl = PLACEHOLDER_AVATAR;
  }
  return (
    <div className="imgWrapper">
      <img className="imgClass" src={finalImgUrl} alt="Avatar" loading="lazy" />
      <Tooltip text={tooltipText} />
    </div>
  );
};
