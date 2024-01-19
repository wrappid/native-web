// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import NativeFormHelperText from "./NativeFormHelperText";
import NativeIcon, { __IconTypes } from "../dataDisplay/NativeIcon";

export default function NativeFormErrorText(props) {
  return (
    <NativeFormHelperText
      {...props}
      styleClasses={[...(props.styleClasses || []), UtilityClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
      error={true}
    >
      <NativeIcon 
        childrenFlag={true} 
        type={__IconTypes.MATERIAL_ICON} 
        styleClasses={[UtilityClasses.MARGIN.MR1]} 
        name="warning"
      />

      {props.children}
    </NativeFormHelperText>
  );
}
