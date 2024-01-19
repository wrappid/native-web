// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCAvatar } from "../../styledComponents/dataDisplay/SCAvatar";

export default function NativeAvatar(props) {
  const { src, label, children, ...restProps } = props;

  return (label || children) ? (<SCAvatar {...restProps}>{label || children}</SCAvatar>) : ( <SCAvatar src={src} {...restProps} /> );
}
