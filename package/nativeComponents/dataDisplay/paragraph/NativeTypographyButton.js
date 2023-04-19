import React from "react";

import NativeTypography from "../NativeTypography";

export default function NativeTypographyButton(props) {
  return (
    <NativeTypography {...props} variant="button">
      {props.children}
    </NativeTypography>
  );
}
