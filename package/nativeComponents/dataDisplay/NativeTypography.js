import React from "react";
import { SCTypography } from "../../styledComponents/dataDisplay/SCTypography";

export default function NativeTypography(props) {
  //Do not use this directly use NativeParagraph
  return (
    <SCTypography
      {...props}
      component={props.component}
      variant={props.variant}
    >
      {props.children}
    </SCTypography>
  );
}
