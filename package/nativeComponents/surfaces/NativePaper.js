// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCPaper } from "../../styledComponents/surfaces/SCPaper";

export default function NativePaper(props) {
  return <SCPaper {...props}>{props.children}</SCPaper>;
}
