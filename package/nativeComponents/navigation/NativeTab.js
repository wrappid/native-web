// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCTab } from "../../styledComponents/navigation/SCTab";

export default function NativeTab(props) {
  return (
    <SCTab {...props}>
      {props.children}
    </SCTab>
  );
}
