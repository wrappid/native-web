// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCBadge } from "../../styledComponents/dataDisplay/SCBadge";

export default function NativeBadge(props) {
  const { children, ...restProps } = props;

  return <SCBadge {...restProps}>{children}</SCBadge>;
}
