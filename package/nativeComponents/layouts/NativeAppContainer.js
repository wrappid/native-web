// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import NativeBox from "./NativeBox";
import NativeCssBaseline from "../../theme/NativeCssBaseline";

export default function NativeAppContainer(props) {
  const { appBar, leftDrawer, footer, uid, coreClasses } = props;

  return (
    <NativeBox
      styleClasses={[UtilityClasses?.HEIGHT?.H_100, UtilityClasses?.DISPLAY?.FLEX]}
    >
      <NativeCssBaseline />

      {appBar()}

      {leftDrawer()}

      <NativeBox
        component="main"
        styleClasses={
          uid
            ? [coreClasses.LAYOUT.CONTENT_CONTAINER]
            : [coreClasses.LAYOUT.LOGGED_OUT_CONTENT_CONTAINER]
        }
      >
        {props.children}

        {footer()}
      </NativeBox>
    </NativeBox>
  );
}

