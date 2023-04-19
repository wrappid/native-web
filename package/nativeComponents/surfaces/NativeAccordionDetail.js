import React from "react";

import { SCAccordionDetail } from "../../surfaces/SCAccordionDetail";

export default function NativeAccordionDetail(props) {
  return <SCAccordionDetail {...props}>{props.children}</SCAccordionDetail>;
}
