// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCCard } from "../../styledComponents/surfaces/SCCard";

export default function NativeCard(props) {
  return <SCCard {...props}>{props.children}</SCCard>;
}
