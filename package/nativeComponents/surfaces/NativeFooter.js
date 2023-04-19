import React from "react";

import NativeDivider from "../surfaces/NativeDivider";
import NativeTypographyBody1 from "../surfaces/paragraph/NativeTypographyBody1";
import NativeBox from "../layouts/NativeBox";
import NativeGrid from "../layouts/NativeGrid";
import { CoreClasses } from "@wrappid/styles";
// import AppVersion from "../../module/app/AppVersion";
import config from "../../config/config";

export default function NativeFooter(props) {
  return (
    <NativeBox styleClasses={[CoreClasses.APP.FOOTER]}>
      <NativeDivider />

      <NativeGrid styleClasses={[CoreClasses.PADDING.PT3]}>
        <NativeTypographyBody1>
          {config?.footerText || "Wrappid Default Footer @ 2023 "}
        </NativeTypographyBody1>

        <NativeTypographyBody1>{/* <AppVersion /> */}</NativeTypographyBody1>
      </NativeGrid>
    </NativeBox>
  );
}
