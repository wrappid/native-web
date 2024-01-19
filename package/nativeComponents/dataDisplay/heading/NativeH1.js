// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import NativeH from "./NativeH";

export default function NativeH1(props) {
  return (
    <NativeH {...props} __level="h1">
      {props.children}
    </NativeH>
  );
}
