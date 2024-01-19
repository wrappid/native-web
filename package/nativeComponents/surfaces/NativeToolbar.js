// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCToolbar } from "../../styledComponents/surfaces/SCToolbar";

export default function NativeToolBar(props) {
  return <SCToolbar {...props}>{props.children}</SCToolbar>;
}
