import React from "react";

import { SCAccordionSummery } from "../../surfaces/SCAccordionSummery";

export default function NativeAccordionSummary(props) {
  return <SCAccordionSummery {...props}>{props.children}</SCAccordionSummery>;
}
