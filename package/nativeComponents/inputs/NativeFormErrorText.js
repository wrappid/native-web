import React from "react";
import NativeFormHelperText from "./NativeFormHelperText";

export default function NativeFormErrorText(props) {
  return (
    <NativeFormHelperText error {...props}>
      {props.children}
    </NativeFormHelperText>
  );
}
