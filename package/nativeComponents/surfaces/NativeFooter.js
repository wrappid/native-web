// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import NativeDivider from "../dataDisplay/NativeDivider";
import NativeTypographyBody1 from "../dataDisplay/paragraph/NativeTypographyBody1";
import NativeBox from "../layouts/NativeBox";
import NativeGrid from "../layouts/NativeGrid";

export default function NativeFooter(props) {
  return (
    <NativeBox styleClasses={[]}>
      <NativeDivider />

      <NativeGrid styleClasses={[UtilityClasses.PADDING.PT3]}>
        <NativeTypographyBody1>
          {props?.footerText || "Wrappid Default Footer @ 2023 "}
        </NativeTypographyBody1>

        {/* eslint-disable-next-line etc/no-commented-out-code */}
        {/* <NativeTypographyBody1><AppVersion /></NativeTypographyBody1> */}
      </NativeGrid>
    </NativeBox>
  );
}
