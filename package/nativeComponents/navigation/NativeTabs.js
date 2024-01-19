// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCTabs } from "../../styledComponents/navigation/SCTabs";

export default function NativeTabs(props) {
  return <SCTabs {...props}>{props.children}</SCTabs>;
}
