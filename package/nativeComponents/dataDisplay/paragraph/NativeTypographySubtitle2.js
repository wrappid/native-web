import React from "react";
import NativeTypography from "../NativeTypography";

export default function NativeTypographySubtitle2(props) {
  return (
    <NativeTypography {...props} variant="subtitle2">
      {props.children}
    </NativeTypography>
  );
}
