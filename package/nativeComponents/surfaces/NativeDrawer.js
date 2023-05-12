import React from "react";
import { SCDrawer } from "../../styledComponents/navigation/SCDrawer";
import { StyledComponentsClasses, getEffectiveStyle } from "@wrappid/styles";

export default function NativeDrawer(props) {
  return (
    <SCDrawer
      {...props}
      PaperProps={{
        sx: {
          ...getEffectiveStyle([StyledComponentsClasses.DRAWER.PAPER_HEIGHT]),
        },
      }}
    >
      {props.children}
    </SCDrawer>
  );
}
