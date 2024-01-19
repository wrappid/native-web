// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCTooltip } from "../../styledComponents/dataDisplay/SCTooltip";

export default function NativeTooltip(props) {
  return <SCTooltip {...props}>{props.children}</SCTooltip>;
}
