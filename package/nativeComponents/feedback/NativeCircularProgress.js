// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCCircularProgress } from "../../styledComponents/feedback/SCCircularProgress";

export default function NativeCircularProgress(props) {
  return <SCCircularProgress {...props}>{props.children}</SCCircularProgress>;
}
