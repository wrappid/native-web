// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { useSelector } from "react-redux";

import { SCRightDrawer } from "../../styledComponents/navigation/SCRightDrawer";

export default function NativeRightDrawer(props) {
  const rightMenuOpen = useSelector((state) => state?.menu?.rightMenuOpen);

  return (
    <SCRightDrawer open={rightMenuOpen} {...props}>
      {props.children}
    </SCRightDrawer>
  );
}
