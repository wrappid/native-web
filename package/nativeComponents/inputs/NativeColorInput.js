import React from "react";

import NativeFormControl from "./NativeFormControl";
import NativeInputLabel from "./NativeInputLabel";
import { getUUID } from "../../helper/appUtils";
import { SCColorInput } from "../../styledComponents/inputs/SCColorInput";

export default function NativeColorInput(props) {
  const {
    NativeId = getUUID(), id, label, touched, error, value, onChange, ...restProps 
  } = props;
  const [color, setColor] = React.useState(value || "#ffffff");

  const handleChange = (newValue) => {
    setColor(newValue);
    onChange && onChange(newValue);
  };
  
  return (
    <NativeFormControl NativeId={`Native-formControl-${NativeId}`}>
      <NativeInputLabel
        shrink={true}
        error={
          touched && error && error.length > 0 ? true : false
        }
        htmlFor={id}
      >
        {label}
      </NativeInputLabel>

      <SCColorInput
        format="hex"
        value={color}
        onChange={handleChange}
        {...restProps} />
    </NativeFormControl>
  );
}
