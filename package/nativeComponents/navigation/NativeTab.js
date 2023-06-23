import React from "react";

import { SCTab } from "../../styledComponents/navigation/SCTab";

export default function NativeTab(props) {
  return (
    <SCTab {...props}>
      {props.children}
    </SCTab>
  );
}
