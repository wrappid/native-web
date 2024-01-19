// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCInputLabel } from "../../styledComponents/inputs/SCInputLabel";

export default function NativeInputLabel(props) {
  return <SCInputLabel {...props}>{props.children}</SCInputLabel>;
}
