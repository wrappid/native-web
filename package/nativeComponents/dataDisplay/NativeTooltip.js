import React from "react";
import { SCTooltip } from "../../styledComponents/dataDisplay/SCTooltip";

export default function NativeTooltip(props) {
  return <SCTooltip {...props}>{props.children}</SCTooltip>;
}
