// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCButton } from "../../styledComponents/inputs/SCButton";

export default function NativeButton(props) {
  const {
    label,
    startIcon,
    onClick,
    variant,
    innerRef,
    type,
    children,
    size = "small",
    ...restProps
  } = props;

  const UserActionLogging = () => {
  };

  return (
    <SCButton
      type={type ? type : "button"}
      startIcon={startIcon ? startIcon : ""}
      ref={innerRef}
      variant={variant ? variant : "contained"}
      size={size}
      onClick={(ele) => {
        UserActionLogging();
        if (onClick && typeof onClick === "function") {
          onClick(ele);
        }
      }}
      {...restProps}
    >
      {label ? label : children ? children : "LABEL NOT PROVIDED"}
    </SCButton>
  );
}
