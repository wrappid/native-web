// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import NativeFormHelperText from "./NativeFormHelperText";
import NativeTextField from "./NativeTextField";
import { SCDateTimePicker } from "../../styledComponents/inputs/SCDateTimePicker";

export default function NativeDateTimePicker(props) {
  const { label, value, formik } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <SCDateTimePicker
        id={props.id}
        name={props.id}
        label={label}
        inputFormat="DD/MM/YYYY hh:mm"
        value={value}
        onChange={(val) => {
          formik.setFieldValue(
            props.id,
            val ? val.format("YYYY-MM-DD hh:mm") : null
          );
        }}
        fullWidth={true}
        error={
          props.touched && props.error && props.error.length > 0 ? true : false
        }
        renderInput={(params) => (
          <NativeTextField
            helperText={
              props.touched && props.error && props.error.length > 0
                ? props.error
                : ""
            }
            {...params}
            InputLabelProps={{ ...params.InputLabelProps, shrink: true }} 
            fullWidth={true}
          />
        )}
      />

      <NativeFormHelperText styleClasses={[UtilityClasses.LAYOUT.NO_MARGIN_P]}>
        {props.helperText}
      </NativeFormHelperText>
    </LocalizationProvider>
  );
}
