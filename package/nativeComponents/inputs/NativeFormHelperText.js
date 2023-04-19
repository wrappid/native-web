import React from "react";
import { useSelector } from "react-redux";
import { SCFormHelperText } from "../../inputs/SCFormHelperText";

export default function NativeFormHelperText(props) {
  const { showHelperText = true } = useSelector((state) => state.forms);
  return (
    <SCFormHelperText {...props}>
      {showHelperText && props.children}
    </SCFormHelperText>
  );
}
