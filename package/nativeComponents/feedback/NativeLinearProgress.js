// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCLinearProgress } from "../../styledComponents/feedback/SCLinearProgress";

export default function NativeLinearProgress(props) {
  return <SCLinearProgress {...props}>{props.children}</SCLinearProgress>;
}
