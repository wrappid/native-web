import React from "react";
import { SCDivider } from "../../styledComponents/dataDisplay/SCDivider";

export default function NativeDivider(props) {
  return <SCDivider {...props}>{props.children}</SCDivider>;
}
