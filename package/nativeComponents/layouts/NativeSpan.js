// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCBox } from "../../styledComponents/layouts/SCBox";

export default function NativeSpan(props) {
  return (
    <SCBox {...props} component="span">
      {props.children}
    </SCBox>
  );
}
