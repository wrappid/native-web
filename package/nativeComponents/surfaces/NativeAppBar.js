// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCAppBar } from "../../styledComponents/surfaces/SCAppBar";

export default function NativeAppBar(props) {
  // eslint-disable-next-line no-unused-vars
  const { auth } = props;

  return (
    <SCAppBar {...props} position="fixed">
      {props.children}
    </SCAppBar>
  );
}
