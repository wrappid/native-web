import React from "react";
import { SCButton } from "../../styledComponents/inputs/SCButton";

export default function NativeButton(props) {
  const {
    label,
    startIcon,
    OnClick,
    variant,
    innerRef,
    type,
    children,
    size = "small",
    ...restProps
  } = props;

  const UserActionLogging = () => {
    // alert("BUTTON CLICK");
  };
  return (
    <SCButton
      type={type ? type : "button"}
      startIcon={startIcon ? startIcon : ""}
      ref={innerRef}
      variant={variant ? variant : "contained"}
      size={size}
      onClick={(e) => {
        UserActionLogging();
        if (OnClick && typeof OnClick === "function") {
          OnClick(e);
        }
      }}
      {...restProps}
    >
      {label ? label : children ? children : "LABEL NOT PROVIDED"}
    </SCButton>
  );
}
