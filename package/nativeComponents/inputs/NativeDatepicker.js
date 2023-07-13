import React from "react";
import { SCDatePicker } from "../../styledComponents/inputs/SCDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import NativeTextField from "./NativeTextField";
import NativeFormHelperText from "./NativeFormHelperText";
import NativeFormErrorText from "./NativeFormErrorText";

export default function NativeDatePicker(props) {
  const { label, onChange, value, formik } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <SCDatePicker
        id={props.id}
        name={props.id}
        label={label}
        inputFormat="DD/MM/YYYY"
        value={value === "" ? null : value}
        onChange={(v) => {
          formik.setFieldValue(props.id, v ? v?.format("YYYY-MM-DD") : null);
        }}
        error={
          props.touched && props.error && props.error.length > 0 ? true : false
        }
        renderInput={(params) => (
          <NativeTextField
            // helperText={props.touched && props.error && props.error.length > 0 ? props.error : ""}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
}
