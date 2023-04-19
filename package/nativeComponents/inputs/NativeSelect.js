import React from "react";
import { getUUID } from "../../utils/appUtils";
import { SCSelect } from "../../inputs/SCSelect";
import NativeFormControl from "./NativeFormControl";
import NativeInputLabel from "./NativeInputLabel";
import NativeMenuItem from "./NativeMenuItem";

export default function NativeSelect(props) {
  const { label, selectID, value, handleChange, options } = props;

  return (
    <NativeFormControl fullWidth>
      <NativeInputLabel id="demo-simple-select-label">{label}</NativeInputLabel>
      <SCSelect
        labelId={selectID || `Native-select-${getUUID()}`}
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options.map((option, index) => {
          return (
            <NativeMenuItem
              key={option?.id || index}
              value={option?.id || option?.label || index}
            >
              {option?.label || `Option ${index}`}
            </NativeMenuItem>
          );
        })}
      </SCSelect>
    </NativeFormControl>
  );
}
