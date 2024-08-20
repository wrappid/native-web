// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { ClickAwayListener } from "@mui/material";

export default function NativeClickAwayListner(props) {
  const { children, ...restProps } = props;

  return (<ClickAwayListener {...restProps}>
    <div>
      {children}
    </div>
  </ClickAwayListener>);
}
