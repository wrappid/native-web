// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCTableContainer } from "../../styledComponents/dataDisplay/SCTableContainer";

export default function NativeTableContainer(props) {
  return <SCTableContainer {...props}>{props.children}</SCTableContainer>;
}
