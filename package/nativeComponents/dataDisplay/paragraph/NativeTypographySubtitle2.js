// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import NativeTypography from "../NativeTypography";

export default function NativeTypographySubtitle2(props) {
  return (
    <NativeTypography {...props} variant="subtitle2">
      {props.children}
    </NativeTypography>
  );
}
