import React from "react";
import { SCFab } from "../../styledComponents/inputs/SCFab";

export default function NativeFab(props) {
  return <SCFab {...props}>{props.children}</SCFab>;
}
