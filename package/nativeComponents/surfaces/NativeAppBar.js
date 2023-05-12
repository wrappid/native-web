import React from "react";
import { SCAppBar } from "../../styledComponents/surfaces/SCAppBar";

export default function NativeAppBar(props) {
  const { auth } = props;

  return (
    <SCAppBar {...props} position="fixed">
      {props.children}
    </SCAppBar>
  );
}
