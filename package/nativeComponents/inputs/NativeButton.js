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
    size = "small",
    ...restProps
  } = props;

  const UserActionLogging = () => {
    // alert("BUTTON CLICK");
  };

  return (
    <SCButton
      type={type ? type : "button"}
      startIcon={startIcon ? startIcon : ''}
      ref={innerRef}
      variant={variant ? variant : "contained"}
      size={size}
      onClick={(e) => {
        UserActionLogging();
        OnClick(e);
      }}
      {...restProps}
    >
      {label ? label : "LABEL NOT PROVIDED"}
    </SCButton>
  );
}
