// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCFormControl } from "../../styledComponents/inputs/SCFormControl";

export default function NativeFormControl(props) {
  return (
    <SCFormControl fullWidth={true} {...props} variant="standard">
      {props.children}
    </SCFormControl>
  );
}
