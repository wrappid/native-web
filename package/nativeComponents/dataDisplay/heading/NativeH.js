import React from "react";
import NativeTypography from "../NativeTypography";

export default function NativeH(props) {
  //DONT use this directly instead use NativeH1 to NativeH6
  return (
    <NativeTypography
      {...props}
      component={props.__level}
      variant={props.variant ? props.variant : props.__level}
    >
      {props.children}
    </NativeTypography>
  );
}
