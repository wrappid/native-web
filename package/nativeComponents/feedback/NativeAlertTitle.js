// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCAlertTitle } from "../../styledComponents/feedback/SCAlertTitle";

export default function NativeAlert(props) {
  return <SCAlertTitle {...props}>{props.children}</SCAlertTitle>;
}
