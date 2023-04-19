import React from "react";
import { SCTooltip } from "../../dataDisplay/SCTooltip";

export default function NativeTooltip(props) {
  return <SCTooltip {...props}>{props.children}</SCTooltip>;
}
