// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCTableBody } from "../../styledComponents/dataDisplay/SCTableBody";

export default function NativeTableBody(props) {
  return <SCTableBody {...props}>{props.children}</SCTableBody>;
}
