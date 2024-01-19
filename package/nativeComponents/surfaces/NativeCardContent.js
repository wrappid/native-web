// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCCardContent } from "../../styledComponents/surfaces/SCCardContent";

export default function NativeCardContent(props) {
  return <SCCardContent {...props}>{props.children}</SCCardContent>;
}
