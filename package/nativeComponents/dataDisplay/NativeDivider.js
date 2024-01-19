// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCDivider } from "../../styledComponents/dataDisplay/SCDivider";

export default function NativeDivider(props) {
  return <SCDivider {...props}>{props.children}</SCDivider>;
}
