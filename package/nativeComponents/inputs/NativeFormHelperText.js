// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";
import { useSelector } from "react-redux";

import { SCFormHelperText } from "../../styledComponents/inputs/SCFormHelperText";
import NativeIcon, { __IconTypes } from "../dataDisplay/NativeIcon";

export default function NativeFormHelperText(props) {
  const { showHelperText = true } = useSelector((state) => state.forms);

  const disableIcon = props.disabledIcon === true ? true : true;

  return (
    <SCFormHelperText
      {...props}
      styleClasses={[...(props?.styleClasses || []), UtilityClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
    >
      {showHelperText && (
        <>
          {disableIcon === true ? null : <NativeIcon 
            childrenFlag={true} 
            type={__IconTypes.MATERIAL_ICON} 
            styleClasses={[UtilityClasses.MARGIN.MR1]} 
            name="info"
          />}

          {props.children}
        </>
      )}
    </SCFormHelperText>
  );
}
