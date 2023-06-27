import React from "react";
import NativeBox from "./NativeBox";
import { UtilityClasses } from "@wrappid/styles";
import { NativeCssBaseline } from "../../theme/themeUtil";

export default function NativeAppContainer(props) {
  const { appBar, leftDrawer, footer, uid, coreClasses } = props;
  return (
    <NativeBox
      styleClasses={[
        UtilityClasses?.HEIGHT?.H_100,
        UtilityClasses?.DISPLAY?.FLEX,
      ]}
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

