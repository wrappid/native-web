import React from "react";
import { SCFade } from "../../styledComponents/utils/SCFade";

export default function NativeFade(props) {
  return <SCFade {...props}>{props.children}</SCFade>;
}
