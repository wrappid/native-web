import React from "react";
import { SCBadge } from "../../styledComponents/dataDisplay/SCBadge";

export default function NativeBadge(props) {
  const { children, ...restProps } = props;
  return <SCBadge {...restProps}>{children}</SCBadge>;
}
