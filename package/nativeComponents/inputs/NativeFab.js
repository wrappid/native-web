// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCFab } from "../../styledComponents/inputs/SCFab";

export default function NativeFab(props) {
  return <SCFab {...props}>{props.children}</SCFab>;
}
