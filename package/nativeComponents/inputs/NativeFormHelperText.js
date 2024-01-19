// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { useSelector } from "react-redux";

import { SCFormHelperText } from "../../styledComponents/inputs/SCFormHelperText";

export default function NativeFormHelperText(props) {
  const { showHelperText = true } = useSelector((state) => state.forms);

  return (
    <SCFormHelperText {...props}>
      {showHelperText && props.children}
    </SCFormHelperText>
  );
}
