// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCCardHeader } from "../../styledComponents/surfaces/SCCardHeader";

export default function NativeCardHeader(props) {
  return <SCCardHeader {...props}>{props.children}</SCCardHeader>;
}
