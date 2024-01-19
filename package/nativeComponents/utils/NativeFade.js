// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCFade } from "../../styledComponents/utils/SCFade";

export default function NativeFade(props) {
  return <SCFade {...props}>{props.children}</SCFade>;
}
