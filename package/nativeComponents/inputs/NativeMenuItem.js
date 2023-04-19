import React from "react";
import { SCMenuItem } from "../../inputs/SCMenuItem";

export default function NativeMenuItem(props) {
  return <SCMenuItem {...props}>{props.children}</SCMenuItem>;
}
