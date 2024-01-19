// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCContainer } from "../../styledComponents/layouts/SCContainer";

export default function NativeContainer(props) {
  return <SCContainer {...props}>{props.children}</SCContainer>;
}
