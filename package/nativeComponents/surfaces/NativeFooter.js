import React from "react";
import NativeBox from "../layouts/NativeBox";
import NativeGrid from "../layouts/NativeGrid";
import NativeDivider from "../dataDisplay/NativeDivider";
import NativeTypographyBody1 from "../dataDisplay/paragraph/NativeTypographyBody1";
// import AppVersion from "../../module/app/AppVersion";
import { UtilityClasses } from "@wrappid/styles";

export default function NativeFooter(props) {
  return (
    <NativeBox styleClasses={[/*CoreClasses.APP.FOOTER*/]}>
      <NativeDivider />

      <NativeGrid styleClasses={[UtilityClasses.PADDING.PT3]}>
        <NativeTypographyBody1>
          {props?.footerText || "Wrappid Default Footer @ 2023 "}
        </NativeTypographyBody1>

        <NativeTypographyBody1>{/* <AppVersion /> */}</NativeTypographyBody1>
      </NativeGrid>
    </NativeBox>
  );
}
