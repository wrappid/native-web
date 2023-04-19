import React from "react";

import { SCBox } from "../../layouts/SCBox";

export default function NativeSpan(props) {
  return (
    <SCBox {...props} component="span">
      {props.children}
    </SCBox>
  );
}
