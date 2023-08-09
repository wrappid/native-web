import React from "react";
import NativeFormHelperText from "./NativeFormHelperText";
import {UtilityClasses} from '@wrappid/styles'
import NativeIcon, { __IconTypes } from "../dataDisplay/NativeIcon";

export default function NativeFormErrorText(props) {
  return (
    <NativeFormHelperText
      {...props}
      styleClasses={[
        ...(props.styleClasses || []),
        UtilityClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
      ]}
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
