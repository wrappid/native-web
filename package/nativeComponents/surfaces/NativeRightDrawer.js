import React from "react";
import { useSelector } from "react-redux";
import { SCRightDrawer } from "../../surfaces/SCRightDrawer";

export default function NativeRightDrawer(props) {
  const rightMenuOpen = useSelector((state) => state?.menu?.rightMenuOpen);
  return (
    <SCRightDrawer open={rightMenuOpen} {...props}>
      {props.children}
    </SCRightDrawer>
  );
}
