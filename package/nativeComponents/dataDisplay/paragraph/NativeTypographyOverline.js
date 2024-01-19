// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import NativeTypography from "../NativeTypography";

export default function NativeTypographyOverline(props) {
  return (
    <NativeTypography {...props} variant="overline">
      {props.children}
    </NativeTypography>
  );
}
