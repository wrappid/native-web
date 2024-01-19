// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCAlert } from "../../styledComponents/feedback/SCAlert";

export default function NativeAlert(props) {
  return <SCAlert {...props}>{props.children}</SCAlert>;
}
