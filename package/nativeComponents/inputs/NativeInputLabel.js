import React from "react";
import { SCInputLabel } from "../../styledComponents/inputs/SCInputLabel";

export default function NativeInputLabel(props) {
  return <SCInputLabel {...props}>{props.children}</SCInputLabel>;
}
