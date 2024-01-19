// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import NativeTypography from "../NativeTypography";

export default function NativeTypographySubtitle1(props) {
  return (
    <NativeTypography {...props} variant="subtitle1">
      {props.children}
    </NativeTypography>
  );
}
