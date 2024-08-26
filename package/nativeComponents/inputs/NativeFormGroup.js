// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCFormGroup } from "../../styledComponents/inputs/SCFormGroup";

export default function NativeFormGroup(props) {
  return <SCFormGroup {...props}>{props.children}</SCFormGroup>;
}
