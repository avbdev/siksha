import React from "react";
import cx from "classnames";

import "./Toggle.css";

interface IToggleProps {
  rounded?: boolean;
  isToggled?: boolean;
  onToggle?: () => void;
}

export const Toggle: React.FC<IToggleProps> = (props) => {
  const { rounded, isToggled, onToggle } = props;
  const sliderCx = cx("slider", { rounded: rounded });

  return (
    <label className="toggle">
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className={sliderCx}></span>
    </label>
  );
};
