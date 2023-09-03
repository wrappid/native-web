import React from "react";
import { SCAvatar } from "../../styledComponents/dataDisplay/SCAvatar";

export default function NativeAvatar(props) {
  const { src, children, ...restProps } = props;
  return children ? (<SCAvatar {...restProps}>{children}</SCAvatar>) : ( <SCAvatar src={src} {...restProps} /> );
}
