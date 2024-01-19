// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCCardActions } from "../../styledComponents/surfaces/SCCardActions";

export default function NativeCardActions(props) {
  return <SCCardActions {...props}>{props.children}</SCCardActions>;
}
