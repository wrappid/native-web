import React from "react";
import { SCFab } from "../../inputs/SCFab";

export default function NativeFab(props) {
  return <SCFab {...props}>{props.children}</SCFab>;
}
