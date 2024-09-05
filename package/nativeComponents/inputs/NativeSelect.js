// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import NativeFormControl from "./NativeFormControl";
import NativeFormHelperText from "./NativeFormHelperText";
import NativeInputLabel from "./NativeInputLabel";
import NativeMenuItem from "./NativeMenuItem";
import { getUUID } from "../../helper/appUtils";
import { SCSelect } from "../../styledComponents/inputs/SCSelect";

export default function NativeSelect(props) {
  const {
    id, label, selectID, value, handleChange, options, children 
  } = props;

  return (
    <NativeFormControl fullWidth {...props}>
      <NativeInputLabel id="demo-simple-select-label">{label}</NativeInputLabel>

      <SCSelect
        labelId={selectID || `Native-select-${getUUID()}`}
        id={id || "demo-simple-select"}
        value={value}
        label={label}
        onChange={handleChange}
        {...props}
      >
        {children ? children : options.map((option, index) => {
          return (
            <NativeMenuItem
              key={option?.id || index}
              value={option?.id || ""}
            >
              {option?.label || `Option ${index}`}
            </NativeMenuItem>
          );
        })}
      </SCSelect>

      {props?.helperText && <NativeFormHelperText>{props?.helperText}</NativeFormHelperText> }
    </NativeFormControl>
  );
}
