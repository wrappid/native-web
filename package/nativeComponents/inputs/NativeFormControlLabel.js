import React from "react";

import { SCFormControlLabel } from "../../styledComponents/inputs/SCFormControlLabel";

export default function NativeFormControlLabel(props) {
  return <SCFormControlLabel {...props}>{props.children}</SCFormControlLabel>;
}
