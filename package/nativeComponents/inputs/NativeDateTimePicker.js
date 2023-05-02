import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import NativeTextField from "./NativeTextField";
import NativeFormHelperText from "./NativeFormHelperText";
import { CoreClasses } from "@wrappid/styles";
import { SCDateTimePicker } from "../../styledComponents/inputs/SCDateTimePicker";

export default function NativeDateTimePicker(props) {
  const { label, onChange, value, formik } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <SCDateTimePicker
        id={props.id}
        name={props.id}
        label={label}
        inputFormat="DD/MM/YYYY hh:mm"
        value={value}
        onChange={(v) => {
          formik.setFieldValue(
            props.id,
            v ? v.format("YYYY-MM-DD hh:mm") : null
          );
        }}
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
          />
        )}
      />
      <NativeFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
        {props.helperText}
      </NativeFormHelperText>
    </LocalizationProvider>
  );
}
