// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import NativeBox from "./NativeBox";
import NativeCssBaseline from "../../theme/NativeCssBaseline";

export default function NativeAppContainer(props) {
  const { appBar, leftDrawer, rightDrawer, footer, coreClasses } = props;

  return (
    <NativeBox
      styleClasses={[UtilityClasses?.HEIGHT?.H_100, UtilityClasses?.DISPLAY?.FLEX]}
    >
      <NativeCssBaseline />

      {appBar()}

      {leftDrawer()}

      <NativeBox
        component="main"
        styleClasses={[coreClasses.LAYOUT.CONTENT_CONTAINER]}
      >
        {props.children}

        {footer()}
      </NativeBox>

      {rightDrawer()}
    </NativeBox>
  );
}

