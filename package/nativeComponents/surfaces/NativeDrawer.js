import React from "react";
import { SCDrawer } from "../../styledComponents/navigation/SCDrawer";
import { StyledComponentClasses, getEffectiveStyle } from "@wrappid/styles";

export default function NativeDrawer(props) {
  return (
    <SCDrawer
      {...props}
      PaperProps={{
        sx: {
          ...getEffectiveStyle([StyledComponentClasses.DRAWER.PAPER_HEIGHT]),
        },
      }}
    >
      {props.children}
    </SCDrawer>
  );
}
