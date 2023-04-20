import React from "react";
import { SCDrawer } from "../../navigation/SCDrawer";
import { CoreClasses, getEffectiveStyle } from "@wrappid/styles";

export default function NativeDrawer(props) {
  return (
    <SCDrawer
      {...props}
      PaperProps={{
        sx: {
          ...getEffectiveStyle([CoreClasses.APP.APP_DRAWER_PAPER_HEIGHT]),
        },
      }}
    >
      {props.children}
    </SCDrawer>
  );
}
