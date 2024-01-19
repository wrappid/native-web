// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCTableFooter } from "../../styledComponents/dataDisplay/SCTableFooter";

export default function NativeTableFooter(props) {
  return <SCTableFooter {...props}>{props.children}</SCTableFooter>;
}
