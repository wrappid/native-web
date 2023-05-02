import React from "react";

import { SCAccordion } from "../../styledComponents/surfaces/SCAccordion";

export default function NativeAccordion(props) {
  return <SCAccordion {...props}>{props.children}</SCAccordion>;
}
