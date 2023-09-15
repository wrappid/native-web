import React from "react";

import { SCStack } from "../../styledComponents/layouts/SCStack";
import NativeDivider from "../dataDisplay/NativeDivider";

export default function NativeStack(props) {
  const {divider, direction, children, ...restProps} = props;

  let dividerComp = null
  if(typeof divider === "boolean"){
    dividerComp = <NativeDivider orientation={direction === "row"?"vertical":"horizontal"} flexItem/>
  }
  else{
    dividerComp = divider
  }

  return <SCStack {...restProps} divider={dividerComp} direction={direction}>{children}</SCStack>;
}
