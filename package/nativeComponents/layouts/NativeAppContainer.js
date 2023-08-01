import React from "react";
import NativeBox from "./NativeBox";
import { UtilityClasses } from "@wrappid/styles";
import { NativeCssBaseline } from "../../theme/themeUtil";
import { useTheme } from "@mui/material";

export default function NativeAppContainer(props) {
  const { appBar, leftDrawer, footer, uid, coreClasses } = props;
  const theme = useTheme()
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
        style={uid?{}:{backgroundColor: theme.palette.primary.dark}}
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

