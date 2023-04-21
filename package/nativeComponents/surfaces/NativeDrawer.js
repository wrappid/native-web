import React from "react";
import { SCDrawer } from "../../navigation/SCDrawer";
import { CoreClasses, getEffectiveStyle } from "@wrappid/styles";

export default function NativeDrawer(props) {
  return (
    <SCDrawer
      {...props}
      PaperProps={{
        sx: {
          ...getEffectiveStyle([CoreClasses.CORE_DRAWER.PAPER_HEIGHT]),
        },
      }}
    >
      {props.children}
    </SCDrawer>
  );
}
