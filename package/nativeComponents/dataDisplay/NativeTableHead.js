// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCTableHead } from "../../styledComponents/dataDisplay/SCTableHead";

export default function NativeTableHead(props) {
  return <SCTableHead {...props}>{props.children}</SCTableHead>;
}
