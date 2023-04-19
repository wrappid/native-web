import React from "react";

import { SCFormControl } from "../../inputs/SCFormControl";

export default function NativeFormControl(props) {
  return (
    <SCFormControl {...props} variant="standard">
      {props.children}
    </SCFormControl>
  );
}
