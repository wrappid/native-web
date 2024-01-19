// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCAccordion } from "../../styledComponents/surfaces/SCAccordion";

export default function NativeAccordion(props) {
  return <SCAccordion {...props}>{props.children}</SCAccordion>;
}
