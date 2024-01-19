// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import NativeTypography from "../NativeTypography";

export default function NativeTypographyButton(props) {
  return (
    <NativeTypography {...props} variant="button">
      {props.children}
    </NativeTypography>
  );
}
