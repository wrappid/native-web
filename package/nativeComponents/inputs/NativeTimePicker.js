// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import NativeFormErrorText from "./NativeFormErrorText";
import NativeFormHelperText from "./NativeFormHelperText";
import NativeTextField from "./NativeTextField";
import { SCTimePicker } from "../../styledComponents/inputs/SCTimePicker";

export default function NativeTimePicker(props) { 
  const [time, setTime] = React.useState(props?.value || "");
  const onChangeTime = (value) => {
    props?.onChange && props.onChange(value);
    setTime(value);
  };

  const {
    touched,
    error,
    minTime,
    maxTime,
    helperText
  } = props;

  function getValidDateTime(){}
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <SCTimePicker
        minTime={ typeof minTime === "string" ? getValidDateTime(minTime) : minTime}
        maxTime={ typeof maxTime === "string" ? getValidDateTime(maxTime) : maxTime}
        value={ props?.value ? String(props?.value) : time}
        onChange={onChangeTime}
        error={touched && error && error.length > 0 ? true : false}
        fullWidth={true}
        renderInput={(params) => (
          <NativeTextField
            helperText={
              touched && error && error.length > 0
                ? error
                : ""
            }
            {...params}
            InputLabelProps={{ ...params.InputLabelProps, shrink: true }}
            fullWidth={true}
          />
        )}
        {...props}
      />

      {error && <NativeFormErrorText>{error}</NativeFormErrorText>}

      {helperText && (
        <NativeFormHelperText styleClasses={[UtilityClasses.MARGIN.M0]}>
          {helperText}
        </NativeFormHelperText>
      )}
    </LocalizationProvider>
  );
}
