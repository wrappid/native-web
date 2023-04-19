import React from "react";
import { SCTextField } from "../../inputs/SCTextField";
//do not use this component directly this is used for datepicker only internally
export default function NativeTextField(props) {
  return <SCTextField variant="standard" {...props} />;
}
