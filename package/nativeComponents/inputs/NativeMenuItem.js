import React from "react";
import { SCMenuItem } from "../../styledComponents/inputs/SCMenuItem";

export default function NativeMenuItem(props) {
  return <SCMenuItem {...props}>{props.children}</SCMenuItem>;
}
